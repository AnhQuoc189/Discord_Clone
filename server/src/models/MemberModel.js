import mongoose from "mongoose";

const memberSchema = mongoose.Schema(
  {
    role: {
      enum: ["ADMIN", "MODERATOR", "GUEST"],
      default: "GUEST",
    },

    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },

    server: { type: mongoose.Schema.Types.ObjectId, ref: "Server" },

    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],

    directMessages: [
      { type: mongoose.Schema.Types.ObjectId, ref: "directMessages" },
    ],

    conversationsInitiated: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
    ],

    conversationsReceived: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
    ],
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model("Member", memberSchema);
export default Member;
