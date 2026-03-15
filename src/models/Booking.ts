import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: Date;
    time: string;
    message?: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: Date;
}

const BookingSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your full name"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Please provide your email address"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please provide a valid email address",
            ],
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            required: [true, "Please provide your phone number"],
            trim: true,
        },
        service: {
            type: String,
            required: [true, "Please select a service"],
            enum: ['bridal', 'party', 'skin', 'hair'],
        },
        date: {
            type: Date,
            required: [true, "Please select a preferred date"],
        },
        time: {
            type: String,
            required: [true, "Please select a preferred time slot"],
            enum: ['morning', 'afternoon', 'evening'],
        },
        message: {
            type: String,
            trim: true,
            default: "",
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled'],
            default: 'pending'
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Booking ||
    mongoose.model<IBooking>("Booking", BookingSchema);
