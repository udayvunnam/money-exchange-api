import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import expressValidator from "express-validator";
import helmet from "helmet";
import morgan from "morgan";
import logger from "./util/logger";

const app = express();

// middlewares to transform request and response behaviour
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(helmet());
app.use(cors());

// morgan logs all request by default
app.use(
  morgan("combined", {
    stream: {
      write: message => logger.info(message.trim())
    }
  })
);

export default app;
