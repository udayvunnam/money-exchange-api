import errorHandler from "errorhandler";
import { NextFunction, Request, Response } from "express";
import app from "./app";
import logger from "./util/logger";
import { ENVIRONMENT, PORT } from "./util/secrets";

// use 'errorHandler' for development and a custom middleware for other environments
if (ENVIRONMENT === "development") {
  app.use(errorHandler());
} else {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);
    res.status(500).json({ message: "Oops! Something went wrong" });
  });
}

// start the server
const port = PORT || 8080;
const server = app.listen(port, () => {
  logger.info(`Listening on http://localhost:${port}`);
});

export default server;
