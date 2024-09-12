import emailjs from "@emailjs/browser";

export const SendOTPviaEmail = async (otp, name, email) => {
    // Prepare the email parameters
    const templateParams = {
        name: name,
        otp: otp,
        email: email,
    };

    try {
        // Send the email using EmailJS
        const res = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,  // Correct service ID
            process.env.NEXT_PUBLIC_TEMPLATE_ID, // Correct template ID
            templateParams,                      // Email parameters
            process.env.NEXT_PUBLIC_PUBLIC_API    // Public API key
        );

        return res;  // EmailJS send method returns the response directly

    } catch (error) {
        console.error("Error sending OTP via email:", error);
        throw error; // Re-throwing the error for further handling
    }
}
