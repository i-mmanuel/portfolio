"use server"

import nodemailer from "nodemailer"
import { checkRateLimit } from "@/lib/rate-limiter"

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change this to your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function submitContactForm(formData: FormData) {
  try {
    // Get form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill in all fields.",
      }
    }

    // Check rate limit (using email as identifier)
    // Allow 3 submissions per 10 minutes
    if (!checkRateLimit(email, 3, 10 * 60 * 1000)) {
      return {
        success: false,
        message: "Too many requests. Please try again later.",
      }
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Log for debugging (remove in production)
    console.log("Form submission:", { name, email, message })

    return {
      success: true,
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}

