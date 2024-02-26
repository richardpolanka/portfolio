"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    let data;
    try {
        await resend.emails.send({
            from: "Kontaktní formulář <onboarding@resend.dev>",
            to: "richard.polanka@gmail.com",
            subject: "Zpráva z kontaktního formuláře",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    };

    return {
        data,
    };
};
  
