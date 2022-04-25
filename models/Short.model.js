const { Schema, model } = require("mongoose");

const shortSchema = new Schema(
  {
    author: {
        type : Schema.Types.ObjectId, 
        ref: 'User' 
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    videoFile: {
        type: String,
        required: true
    },
     genre: {
        type: String,
        enum: ['DRAMA', 'COMEDY', 'ACTION', 'THRILLER', 'MUSICAL', 'HORROR', 'SCI-FI', 'WESTERN', 'DOCUMENTARY', 'ROMANCE', 'ADVENTURE', 'HISTORY', 'SPORTS', 'ANIMATION', 'EROTIC', 'NOIR', 'JC'],
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Short = model("Short", shortSchema);

module.exports = Short;
