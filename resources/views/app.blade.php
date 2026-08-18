<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Link previews (WhatsApp, iMessage, Facebook, X, Slack). Without
             these a crawler has nothing to read and falls back to the
             favicon, which is why the Laravel mark used to show up. --}}
        @php
            $siteDescription = 'Moped rentals and weekly community rides on the Rhode Island shoreline. 140 Atlantic Ave, Westerly RI.';
        @endphp
        <meta name="description" content="{{ $siteDescription }}">

        <meta property="og:site_name" content="{{ config('app.name') }}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="{{ config('app.name') }}">
        <meta property="og:description" content="{{ $siteDescription }}">
        <meta property="og:url" content="{{ url()->current() }}">
        {{-- Must be absolute: crawlers do not resolve relative paths. --}}
        <meta property="og:image" content="{{ url('/og-image.png') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Atlantic Ave Cruisers badge">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('app.name') }}">
        <meta name="twitter:description" content="{{ $siteDescription }}">
        <meta name="twitter:image" content="{{ url('/og-image.png') }}">

        <meta name="theme-color" content="#0f3149">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
        <link rel="icon" href="/favicon-192.png" sizes="192x192" type="image/png">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
