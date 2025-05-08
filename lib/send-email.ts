"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const { name, email, phone, subject, message } = data

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER || "smtp.gmail.com",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  // HTML email template
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <div style="background-color: #8BC34A; padding: 15px; border-radius: 5px 5px 0 0;">
        <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #757575; font-size: 12px;">
          <p>This email was sent from the Vol-Tech Industries website contact form.</p>
        </div>
      </div>
    </div>
  `

  try {
    // Send email
    const info = await transporter.sendMail({
      from: `"Vol-Tech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || "info@voltechtransformer.com",
      cc: email, // Send a copy to the person who submitted the form
      subject: `Contact Form: ${subject}`,
      html: htmlContent,
    })

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
