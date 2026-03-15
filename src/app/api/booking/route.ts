import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Destructure and validate
        const { name, email, phone, service, date, time, message } = body;

        if (!name || !email || !phone || !service || !date || !time) {
            return NextResponse.json(
                { success: false, error: "Please fill out all required fields marked with an asterisk (*)." },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        await connectToDatabase();

        // Save booking data to MongoDB
        const newBooking = await Booking.create({
            name,
            email,
            phone,
            service,
            date: new Date(date), // ensure date format is correct
            time,
            message,
        });

        return NextResponse.json(
            { success: true, message: "Booking received successfully!", data: newBooking },
            { status: 201 }
        );

    } catch (error: any) {
        console.error("Error creating booking:", error);
        return NextResponse.json(
            { success: false, error: "Failed to process your booking request. Please try again." },
            { status: 500 }
        );
    }
}
