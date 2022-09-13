import mongoose from "mongoose";
import { config } from "dotenv";
import log from "../log/logger";
config();

mongoose.connect(process.env.DBURI!).then(() => {
  log.info("MongoDB connected!");
});

mongoose.connection.on("error", (err) => {
  log.error(err.message);
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
