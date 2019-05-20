"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const http_status_1 = __importDefault(require("http-status"));
const firestore_service_1 = require("../services/firestore.service");
const logger_1 = __importDefault(require("../util/logger"));
const validator_1 = require("../util/validator");
exports.getUsage = (req, res, next) =>
  __awaiter(this, void 0, void 0, function*() {
    const { error } = joi_1.default.validate(
      req.query.limit,
      validator_1.usageSchema
    );
    if (error) {
      logger_1.default.error(error);
      res.status(405).json({ error, message: "Invalid input" });
    }
    const usageLimit = parseInt(req.query.limit, 10) || 10;
    try {
      const lastConversions = yield firestore_service_1.getUsage(usageLimit);
      res.status(http_status_1.default.OK).json(lastConversions);
    } catch (error) {
      next(error);
    }
  });
//# sourceMappingURL=usage.js.map
