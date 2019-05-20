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
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../util/constants");
const firestore_service_1 = require("./firestore.service");
exports.convert = data =>
  __awaiter(this, void 0, void 0, function*() {
    const { value, from, to } = data;
    const response = yield axios_1.default.get(
      `${constants_1.APP_CONST.EXCHANGE_RATES_API}/latest`,
      {
        params: {
          base: from,
          symbols: to
        }
      }
    );
    const exchangeRate = response.data.rates[to];
    const convertedValue = exchangeRate * value;
    // On successful conversion, add it to firestore for usage history
    firestore_service_1.updateUsage({
      value,
      from,
      to,
      exchangeRate,
      convertedValue
    });
    return { convertedValue, exchangeRate };
  });
//# sourceMappingURL=currency.service.js.map
