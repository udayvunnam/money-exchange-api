"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.convertInputSchema = joi_1.default.object().keys({
  value: joi_1.default.number().required(),
  from: joi_1.default
    .string()
    .required()
    .length(3),
  to: joi_1.default
    .string()
    .required()
    .length(3)
});
exports.usageSchema = joi_1.default
  .number()
  .integer()
  .required()
  .min(1)
  .max(100);
//# sourceMappingURL=validator.js.map
