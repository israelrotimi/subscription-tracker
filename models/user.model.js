import {Schema, Model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "User Password is required"],
        minLength: 6
    }
}, { timestamp: true });

const User = new Model("User", userSchema);

export default User