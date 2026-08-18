<x-mail::message>
# New club sign-up

Someone signed up for the weekly community ride on the website.

<x-mail::panel>
**Name:** {{ $riderName }}

**Email:** {{ $riderEmail }}

**Mobile:** {{ $riderPhone }}
</x-mail::panel>

Replying to this email goes straight back to {{ $riderName }}.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
