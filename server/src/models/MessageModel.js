import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    content: {
      type: String,
    },

    fileUrl: {
      type: String,
    },

    member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },

    channel: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },

    deleted: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
