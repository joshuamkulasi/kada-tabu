export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
};

export const emailOptions = {
  from: process.env.GMAIL_USER,
  to: 'kadatabugraphicdesign@gmail.com',
  subject: 'New Contact Form Submission',
  text: 'New contact form submission',
  html: ''
};
