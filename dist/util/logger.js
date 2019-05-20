"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const secrets_1 = require("./secrets");
// winston logger to be used for app wide logging.
const logger = winston_1.createLogger({
  level: "info",
  format: winston_1.format.combine(
    winston_1.format.json(),
    winston_1.format.prettyPrint(),
    winston_1.format.colorize()
  ),
  transports: [
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    new winston_1.transports.File({
      filename: "error.log",
      level: "error",
      handleExceptions: true
    }),
    new winston_1.transports.File({
      filename: "combined.log",
      handleExceptions: true
    })
  ]
});
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (secrets_1.ENVIRONMENT !== "production") {
  logger.add(
    new winston_1.transports.Console({
      format: winston_1.format.simple()
    })
  );
}
exports.default = logger;
//# sourceMappingURL=logger.js.map
