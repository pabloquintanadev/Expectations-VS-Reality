const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    origin: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    destination: {
      type: String,
    },
    textContent: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Message = model("Message", messageSchema);

module.exports = Message;