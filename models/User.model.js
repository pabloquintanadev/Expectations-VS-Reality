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
        enum:['USER', 'CREATOR', 'ADMIN'],
        default: 'USER'
    },
    likesCounter: {
        type: Number,
        default: 0
    },
    receivedMessages: { 
        type : Schema.Types.ObjectId, 
        ref: 'Message' 
    },
    uploadedShorts: {
        type: Schema.Types.ObjectId,
        ref: 'Short'
    },
    savedShorts: {
        type: Schema.Types.ObjectId,
        ref: 'Short'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;