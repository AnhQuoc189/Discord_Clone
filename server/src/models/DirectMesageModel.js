import mongoose from "mongoose";

const directMessageSchema = mongoose.Schema(
  {
    content: {
      type: String,
    },

    fileUrl: {
      type: String,
    },

    member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },

    conversation: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },

    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const DirectMessage = mongoose.model("DirectMessage", directMessageSchema);
export default DirectMessage;
