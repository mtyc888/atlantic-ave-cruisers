<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/rates', 'rates')->name('rates');
Route::inertia('/join', 'join')->name('join');
Route::inertia('/gallery', 'gallery')->name('gallery');
Route::inertia('/waiver', 'waiver')->name('waiver');
Route::inertia('/about', 'about')->name('about');

// The weekly rides content now lives on /join alongside the club sign-up.
Route::redirect('/rides', '/join');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
