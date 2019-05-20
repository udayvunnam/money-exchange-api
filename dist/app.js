"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_validator_1 = __importDefault(require("express-validator"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes/routes"));
const logger_1 = __importDefault(require("./util/logger"));
const app = express_1.default();
// middlewares to transform request and response behaviour
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_validator_1.default());
app.use(helmet_1.default());
app.use(cors_1.default());
// morgan logs all request by default
app.use(
  morgan_1.default("combined", {
    stream: {
      write: message => logger_1.default.info(message.trim())
    }
  })
);
routes_1.default(app);
exports.default = app;
//# sourceMappingURL=app.js.map
