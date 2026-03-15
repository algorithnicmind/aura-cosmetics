import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
}

const ContactSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your name"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Please provide your email"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please provide a valid email address",
            ],
            trim: true,
            lowercase: true,
        },
        message: {
            type: String,
            required: [true, "Please provide your message"],
            trim: true,
        },
    },
    {
        timestamps: true, // Automatically manages createdAt and updatedAt
    }
);

// This ensures that Next.js doesn't try to compile the model twice in development
export default mongoose.models.Contact ||
    mongoose.model<IContact>("Contact", ContactSchema);
