const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        unique: true
    },
    textContent: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Message = model("Message", messageSchema);

module.exports = Message;