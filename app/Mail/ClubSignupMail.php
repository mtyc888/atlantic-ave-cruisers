<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ClubSignupMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $riderName,
        public string $riderEmail,
        public string $riderPhone,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Club sign-up: {$this->riderName}",
            // Gmail rewrites From to the authenticated account, so the rider's
            // address goes in Reply-To — hitting reply answers them directly.
            replyTo: [new Address($this->riderEmail, $this->riderName)],
        );
    }

    public function content(): Content
    {
        // `markdown`, not `view` — the template uses <x-mail::…> components,
        // whose namespace only exists in the markdown renderer.
        return new Content(markdown: 'mail.club-signup');
    }
}
