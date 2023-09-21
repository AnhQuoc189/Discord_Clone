import mongoose from "mongoose";

const serverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },

    imageUrl: {
      type: String,
    },

    inviteCode: {
      type: String,
    },

    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },

    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],

    channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }],
  },
  {
    timestamps: true,
  }
);

const Server = mongoose.model("Server", serverSchema);
export default Server;
