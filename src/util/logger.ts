import { createLogger, format, transports } from "winston";
import { ENVIRONMENT } from "./secrets";

// winston logger to be used for app wide logging.

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.json(),
    format.prettyPrint(),
    format.colorize()
  ),
  transports: [
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    new transports.File({
      filename: "error.log",
      level: "error",
      handleExceptions: true
    }),
    new transports.File({
      filename: "combined.log",
      handleExceptions: true
    })
  ]
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (ENVIRONMENT !== "production") {
  logger.add(
    new transports.Console({
      format: format.simple()
    })
  );
}

export default logger;
