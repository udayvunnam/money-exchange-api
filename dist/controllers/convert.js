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
const currency_service_1 = require("../services/currency.service");
const logger_1 = __importDefault(require("../util/logger"));
const validator_1 = require("../util/validator");
exports.postConvert = (req, res, next) =>
  __awaiter(this, void 0, void 0, function*() {
    const { error } = joi_1.default.validate(
      req.body,
      validator_1.convertInputSchema
    );
    if (error) {
      logger_1.default.error(error);
      res.status(405).json({ error, message: "Invalid input" });
    }
    const { from, to, value } = req.body;
    const amount = parseInt(value, 10);
    try {
      const { convertedValue, exchangeRate } = yield currency_service_1.convert(
        { value: amount, from, to }
      );
      res.status(http_status_1.default.OK).json({
        convertedValue,
        exchangeRate
      });
    } catch (error) {
      next(error);
    }
  });
//# sourceMappingURL=convert.js.map
