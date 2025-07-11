import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "favmac007@gmail.com", // your email
            pass: process.env.GMAIL_APP_PASSWORD // set this in your .env.local
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: "favmac007@gmail.com",
            subject: `Portfolio Contact: ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
            headers: {
                'X-Priority': '1',
                'Importance': 'high'
            }
        });
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send message." });
    }
}