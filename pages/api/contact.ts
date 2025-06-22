import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
        service: "gmail", // or your email provider
        auth: {
            user: process.env.EMAIL_USER, // set in .env.local
            pass: process.env.EMAIL_PASS, // set in .env.local
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO, // your receiving email, set in .env.local
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br/>${message}</p>`,
        });
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error });
    }
}