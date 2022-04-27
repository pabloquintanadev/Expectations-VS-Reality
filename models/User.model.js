const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,

        },
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        profileImage: {
            type: String,
        },
        role: {
            type: String,
            enum: ['USER', 'CREATOR', 'ADMIN'],
            default: 'USER'
        },
        savedShorts: [{
            type: Schema.Types.ObjectId,
            ref: 'Short'
        }],
        savedMovies: {
            type: Array
        },
        likesCounter: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

const User = model("User", userSchema);

module.exports = User;