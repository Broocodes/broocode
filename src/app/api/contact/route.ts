import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, mobile, service } = body;

    // ----------------------------
    // 1. Validation
    // ----------------------------
    if (!name || !email || !mobile || !service) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // ----------------------------
    // 2. Submit to Google Forms
    // ----------------------------
    try {
      const formData = new URLSearchParams();

      // 🔁 Google Form field IDs
      formData.append('entry.2052365240', name);    // name
      formData.append('entry.1819879228', email);   // email
      formData.append('entry.573130229', mobile);   // mobile
      formData.append('entry.1768784806', service); // service

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLScfwKMQHlCAoRtNP55VYwOIZTTBNApAAuYz5LQKCl3GnvOzzw/formResponse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }
      );
    } catch (err) {
      // Do not break flow if Google Forms fails
      console.error('Google Form submission failed:', err);
    }

    // ----------------------------
    // 3. Email setup
    // ----------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const serviceMap: Record<string, string> = {
      web: 'Web Development',
      app: 'App Development',
      'digital-marketing': 'Digital Marketing',
      'custom-software': 'Custom Software',
      other: 'Other Service',
    };

    const serviceName = serviceMap[service] || service;

    // ----------------------------
    // 4. Admin Email
    // ----------------------------
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission - ${serviceName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><small>Submitted on ${new Date().toLocaleString()}</small></p>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Service: ${serviceName}

        Submitted on ${new Date().toLocaleString()}
      `,
    };

    // ----------------------------
    // 5. User Confirmation Email
    // ----------------------------
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out regarding <strong>${serviceName}</strong>.</p>
        <p>Our team will contact you within 24 hours.</p>
        <p><strong>Your details:</strong></p>
        <ul>
          <li>Email: ${email}</li>
          <li>Mobile: ${mobile}</li>
          <li>Service: ${serviceName}</li>
        </ul>
        <p>— The Broocode Team</p>
      `,
      text: `
        Hi ${name},

        Thank you for contacting us regarding ${serviceName}.
        We will get back to you within 24 hours.

        Your details:
        Email: ${email}
        Mobile: ${mobile}
        Service: ${serviceName}

        — The Broocode Team
      `,
    };

    // ----------------------------
    // 6. Send Emails
    // ----------------------------
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      {
        error: 'Failed to submit form',
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
