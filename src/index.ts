import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import { config } from "dotenv";
import cors from "cors";
import createHttpError from "http-errors";

config();

import "./database/db";
import log from "./log/logger";
import UserRoute from "./routes/User.route";

const app: Application = express();
const port: Number = Number(process.env.PORT);

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/users", UserRoute);
// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(new createHttpError.NotFound());
// });

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    status: err.status || 500,
  });
};
app.use(errorHandler);
app.get("/hello", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(port, () => log.info(`server is listening on port ${port}`));
