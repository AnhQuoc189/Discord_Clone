import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    memberOne: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },

    memberTwo: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },

    directMessages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DirectMessage",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
