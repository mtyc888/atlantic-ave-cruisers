<?php

use App\Http\Controllers\ClubSignupController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/rates', 'rates')->name('rates');
Route::inertia('/join', 'join')->name('join');
Route::inertia('/gallery', 'gallery')->name('gallery');
Route::inertia('/waiver', 'waiver')->name('waiver');
Route::inertia('/about', 'about')->name('about');

// Throttled: this posts straight into a mailbox, so it is worth rate limiting.
Route::post('/join', [ClubSignupController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('join.store');

// The weekly rides content now lives on /join alongside the club sign-up.
Route::redirect('/rides', '/join');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
