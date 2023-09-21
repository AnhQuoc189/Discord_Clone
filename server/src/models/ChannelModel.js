import mongoose from "mongoose";

const channelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },

    type: {
      enum: ["TEXT", "AUDIO", "VIDEO"],
      default: "TEXT",
    },

    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },

    server: { type: mongoose.Schema.Types.ObjectId, ref: "Server" },

    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  {
    timestamps: true,
  }
);

const Channel = mongoose.model("Channel", channelSchema);
export default Channel;
