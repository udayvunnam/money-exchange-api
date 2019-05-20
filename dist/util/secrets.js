"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("./logger"));
if (fs_1.default.existsSync(".env")) {
  logger_1.default.debug(
    "Using .env file to supply config environment variables"
  );
  dotenv_1.default.config({ path: ".env" });
} else if (fs_1.default.existsSync(".env")) {
  logger_1.default.debug(
    "Using .env.example file to supply config environment variables"
  );
  dotenv_1.default.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}
exports.ENVIRONMENT = process.env.NODE_ENV;
exports.PROD = exports.ENVIRONMENT === "production"; // Anything else is treated as 'dev'
exports.PORT = process.env.PORT;
//# sourceMappingURL=secrets.js.map
