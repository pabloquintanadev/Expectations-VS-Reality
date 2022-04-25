const { Schema, model } = require("mongoose");

const shortSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,

    },
    summary: {
      type: String,

    },
    videoFile: {
      type: String,

    },
    genre: {
      type: String,
      enum: ['DRAMA', 'COMEDY', 'ACTION', 'THRILLER', 'MUSICAL', 'HORROR', 'SCI-FI', 'WESTERN', 'DOCUMENTARY', 'ROMANCE', 'ADVENTURE', 'HISTORY', 'SPORTS', 'ANIMATION', 'EROTIC', 'NOIR', 'JC'],

    },
    isMasterpiece: {
      type: Boolean
    },
    isBullshit: {
      type: Boolean
    },
    isShort: {
      type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

const Short = model("Short", shortSchema);

module.exports = Short;
