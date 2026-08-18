<x-mail::message>
# New club sign-up

Someone signed up for the weekly community ride on the website.

<x-mail::panel>
**Name:** {{ $riderName }}

**Email:** {{ $riderEmail }}

**Mobile:** {{ $riderPhone }}
</x-mail::panel>

Add them to the riders group chat, and collect the fee when they turn up.

Replying to this email goes straight back to {{ $riderName }}.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
