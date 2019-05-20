"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./util/logger"));
const secrets_1 = require("./util/secrets");
// use 'errorHandler' for development and a custom middleware for other environments
if (secrets_1.ENVIRONMENT === "development") {
  app_1.default.use(errorhandler_1.default());
} else {
  app_1.default.use((err, req, res, next) => {
    logger_1.default.error(err);
    res.status(500).json({ message: "Oops! Something went wrong" });
  });
}
// start the server
const port = secrets_1.PORT || 8080;
const server = app_1.default.listen(port, () => {
  logger_1.default.info(`Listening on http://localhost:${port}`);
});
exports.default = server;
//# sourceMappingURL=server.js.map
