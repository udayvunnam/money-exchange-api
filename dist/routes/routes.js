"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../config/swagger.json"));
const convertController = __importStar(require("../controllers/convert"));
const currencyController = __importStar(require("../controllers/currency"));
const usageController = __importStar(require("../controllers/usage"));
function setRoutes(app) {
  const router = express_1.default.Router();
  // Currency
  router.route("/currency").get(currencyController.getCurrencies);
  // Convert
  router.route("/convert").post(convertController.postConvert);
  // Usage
  router.route("/usage").get(usageController.getUsage);
  app.use("/v1", router);
  app.use(
    "/api-docs",
    swagger_ui_express_1.default.serve,
    swagger_ui_express_1.default.setup(swagger_json_1.default)
  );
  app.use("*", (req, res) => {
    res.redirect("/api-docs");
  });
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map
