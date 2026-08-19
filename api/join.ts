import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

/**
 * Club sign-up: emails the rider's details to the shop inbox.
 *
 * Nothing is stored — there is no database. Credentials come from the Vercel
 * environment (MAIL_USERNAME / MAIL_PASSWORD), where MAIL_PASSWORD is a
 * Google App Password, not the account password.
 */

type Errors = Record<string, string>;

const MAX = { name: 120, email: 190, phone: 40 };

function validate(body: Record<string, unknown>): { errors: Errors; clean: Record<string, string> } {
    const errors: Errors = {};
    const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

    const name = str(body.name);
    const email = str(body.email);
    const phone = str(body.phone);

    if (!name) errors.name = 'Please tell us your name.';
    else if (name.length > MAX.name) errors.name = 'That name is too long.';

    if (!email) errors.email = 'Please give us an email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'That email does not look right.';
    else if (email.length > MAX.email) errors.email = 'That email is too long.';

    if (!phone) errors.phone = 'Please give us a mobile number.';
    else if (phone.length > MAX.phone) errors.phone = 'That number is too long.';

    return { errors, clean: { name, email, phone } };
}

const escapeHtml = (s: string) =>
    s.replace(/[&<>"']/g, (c) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
    );

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body) ?? {};

    // Honeypot: hidden from people, irresistible to bots. Answer 200 so the
    // bot has nothing to learn from the response.
    if (typeof body.website === 'string' && body.website.trim() !== '') {
        return res.status(200).json({ ok: true });
    }

    const { errors, clean } = validate(body);
    if (Object.keys(errors).length) {
        return res.status(422).json({ errors });
    }

    const user = process.env.MAIL_USERNAME;
    const pass = process.env.MAIL_PASSWORD;
    const to = process.env.MAIL_TO ?? user;

    if (!user || !pass) {
        console.error('MAIL_USERNAME or MAIL_PASSWORD is not set');
        return res.status(500).json({ message: 'Mail is not configured' });
    }

    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // STARTTLS on 587
            auth: { user, pass },
        });

        await transport.sendMail({
            from: `"Atlantic Ave Cruisers" <${user}>`,
            to,
            // Gmail rewrites From to the authenticated account, so the rider's
            // address goes here — hitting reply answers them directly.
            replyTo: `"${clean.name}" <${clean.email}>`,
            subject: `Club sign-up: ${clean.name}`,
            text: [
                'New club sign-up from the website.',
                '',
                `Name:   ${clean.name}`,
                `Email:  ${clean.email}`,
                `Mobile: ${clean.phone}`,
                '',
                'Add them to the riders group chat, and collect the fee when they turn up.',
            ].join('\n'),
            html: `
                <h2 style="font-family:sans-serif">New club sign-up</h2>
                <p style="font-family:sans-serif">Someone signed up for the weekly community ride on the website.</p>
                <table style="font-family:sans-serif;border-collapse:collapse">
                    <tr><td style="padding:4px 12px 4px 0"><b>Name</b></td><td>${escapeHtml(clean.name)}</td></tr>
                    <tr><td style="padding:4px 12px 4px 0"><b>Email</b></td><td>${escapeHtml(clean.email)}</td></tr>
                    <tr><td style="padding:4px 12px 4px 0"><b>Mobile</b></td><td>${escapeHtml(clean.phone)}</td></tr>
                </table>
                <p style="font-family:sans-serif">Replying to this email goes straight back to them.</p>
            `,
        });

        return res.status(200).json({ ok: true });
    } catch (e) {
        // Never tell the rider they are signed up when nobody was told.
        console.error('Club sign-up email failed', e);
        return res.status(500).json({ message: 'Could not send that right now.' });
    }
}
