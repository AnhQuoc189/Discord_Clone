import express from "express";
import connectDb from "./config/dbConnection.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import ChannelRouter from "./routes/ChanneRoute.js";
import ConversationRouter from "./routes/ConversationRoute.js";
import DirectMessageRouter from "./routes/DirectMessageRoute.js";
import MemberRouter from "./routes/MemberRoute.js";
import MessageRouter from "./routes/MessageRoute.js";
import ProfileRouter from "./routes/ProfileRoute.js";
import ServerRouter from "./routes/ServerRoute.js";

dotenv.config();
// connectDb();
const Port = process.env.Port || 5000;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(errorHandler);

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
