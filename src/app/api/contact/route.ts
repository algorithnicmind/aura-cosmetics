import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        // 1. Parse the incoming JSON data from the frontend form
        const body = await req.json();
        const { name, email, message } = body;

        // 2. Basic validation to ensure required fields aren't empty
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Please provide all required fields." },
                { status: 400 }
            );
        }

        // 3. Connect to the MongoDB Database securely
        await connectToDatabase();

        // 4. Create a new document in the Contacts collection using our Model
        const newContact = await Contact.create({
            name,
            email,
            message,
        });

        // 5. Send back a success response
        return NextResponse.json(
            { success: true, message: "Your message has been sent successfully!", data: newContact },
            { status: 201 }
        );

    } catch (error: any) {
        console.error("Error submitting contact form:", error);

        // Send back an error response with 500 (Internal Server Error)
        return NextResponse.json(
            { success: false, error: "Failed to submit form. Please try again later." },
            { status: 500 }
        );
    }
}
