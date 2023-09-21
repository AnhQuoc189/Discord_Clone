import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },

    imageUrl: {
      type: String,
    },

    email: {
      type: String,
    },

    servers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Server" }],

    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],

    channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
