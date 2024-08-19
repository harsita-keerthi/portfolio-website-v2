// app/api/send/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

console.log('Resend API Key:', apiKey);  // Log to verify API key

const resend = new Resend(apiKey);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: ['harsita.keerthikanth@gmail.com'],
      subject: 'Hello world',
      html: '<p>Email Body</p>',
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
