<?php

namespace App\Http\Controllers;

use App\Mail\ClubSignupMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ClubSignupController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email:rfc', 'max:190'],
            'phone' => ['required', 'string', 'max:40'],
            // Honeypot: hidden from people, irresistible to bots.
            'website' => ['nullable', 'prohibited'],
        ], [
            'website.prohibited' => 'That sign-up looked automated.',
        ]);

        try {
            Mail::to(config('mail.from.address'))
                ->send(new ClubSignupMail($data['name'], $data['email'], $data['phone']));
        } catch (\Throwable $e) {
            // The rider is not at fault if our mail server is down, but we must
            // not tell them they are signed up when nobody was told.
            Log::error('Club sign-up email failed', [
                'email' => $data['email'],
                'error' => $e->getMessage(),
            ]);

            return back()->withInput()->withErrors([
                'email' => 'Something went wrong sending that. Please try again, or email us directly.',
            ]);
        }

        return back()->with('signedUp', true);
    }
}
