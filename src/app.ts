import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import log from "./log/logger";
const app: Application = express();
const port: number = 4010;
app.use(express.json());
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    status: err.status || 500,
  });
};
app.use(errorHandler);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(port, () => log.info(`server is listening on port `, port));
