const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        profileImage: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['USER', 'CREATOR', 'ADMIN'],
            default: 'USER'
        },
        savedShorts: [{
            type: Schema.Types.ObjectId,
            ref: 'Short'
        }]
    },
    {
        timestamps: true,
    }
);

const User = model("User", userSchema);

module.exports = User;