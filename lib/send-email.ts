"use server";

import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const { name, email, phone, subject, message } = data;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER || "smtp.gmail.com",
    port: Number.parseInt(process.env.EMAIL_PORT || "465"),
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // HTML email template
  const htmlContent = `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dcdcdc; border-radius: 8px; overflow: hidden;">
    <div style="background: #8BC34A; padding: 20px;">
      <h2 style="margin: 0; color: #ffffff; font-weight: 500;">📬 New Inquiry Received</h2>
    </div>
    <div style="padding: 24px;">
      <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 0 0 10px;"><strong>Phone:</strong> ${phone}</p>
      <p style="margin: 0 0 20px;"><strong>Subject:</strong> ${subject}</p>
      <div style="background-color: #f1f3f4; padding: 16px; border-radius: 6px; line-height: 1.5;">
        <p style="margin: 0;"><strong>Message:</strong></p>
        <p style="margin-top: 8px;">${message.replace(/\n/g, "<br>")}</p>
      </div>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 12px; color: #999999;">
        <p>This message was sent from the contact form on the <strong>Vol-Tech Industries</strong> website.</p>
      </div>
    </div>
  </div>
`;

  try {
    // Send email
    const info = await transporter.sendMail({
      from: `"Vol-Tech Industries" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      cc: email,
      subject: `Contact Form: ${subject}`,
      html: htmlContent,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
