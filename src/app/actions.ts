"use server";

import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey || apiKey === "RESEND_API_KEY") {
    console.error("RESEND_API_KEY is not defined or is still the placeholder value");
    return { error: "Email service is not configured. Please add a valid RESEND_API_KEY to your environment variables." };
  }

  // Initialize Resend inside the function to avoid module-level crashes
  let resend: Resend;
  try {
    resend = new Resend(apiKey);
  } catch (err) {
    console.error("Failed to initialize Resend:", err);
    return { error: "Failed to initialize email service. Check your API key." };
  }
  
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    console.log("Email submission attempt:", { name, email, phone });

    if (!name || !email || !phone || !message) {
      return { error: "All fields are required" };
    }

      try {
        console.log("Sending email via Resend...");
        const { data, error } = await resend.emails.send({
          from: "Dulce Escobar <onboarding@resend.dev>",
          to: ["rescobardulce@gmail.com"],
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });

        if (error) {
          console.error("Resend error:", error);
          // More descriptive error for restricted onboarding email or domain issues
          if (error.name === "restricted_address" || error.message.includes("restricted")) {
            return { error: "The email could not be sent. Please check if the sender domain is correctly verified in Resend." };
          }
          return { error: error.message };
        }

      console.log("Email sent successfully:", data);
      return { success: true, data };
  } catch (err) {
    console.error("Email sending error:", err);
    return { error: "Failed to send email. Please try again later." };
  }
}
