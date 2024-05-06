import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req) {
    if (req.method === 'POST') {
        try {
            // Parse the request body as JSON
            const body = JSON.parse(await req.text());

            const { email, phone, name, message } = body;

            const info = await transporter.sendMail({
                from: email,
                to: 'johnson.giang21@gmail.com',
                subject: 'New Contact Form Submission',
                text: `You have a new contact form submission from:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
            });
            console.log('Message sent: %s', info.messageId);
            return NextResponse.json({ success: true }, { status: 200 });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ success: false, error: 'Method Not Allowed' }, { status: 405 });
    }
}
