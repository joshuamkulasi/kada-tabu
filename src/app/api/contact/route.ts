import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { emailConfig, emailOptions } from './email.config';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  product: string;
  subject: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Create a transporter using the default SMTP transport
    const transporter = nodemailer.createTransport(emailConfig);

    // Generate HTML content for the email
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Product/Service:</strong> ${body.product}</p>
      <p><strong>Subject:</strong> ${body.subject}</p>
      <p><strong>Message:</strong> ${body.message}</p>
    `;

    // Update email options with the form data
    const mailOptions = {
      ...emailOptions,
      subject: body.subject || `Enquiry about ${body.product || 'Services'}`,
      text: 'New contact form submission',
      html: htmlContent
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
