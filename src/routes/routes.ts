import express, { Express } from "express";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "../config/swagger.json";
import * as convertController from "../controllers/convert";
import * as currencyController from "../controllers/currency";
import * as usageController from "../controllers/usage";

export default function setRoutes(app: Express) {
  const router = express.Router();

  // Currency
  router.route("/currency").get(currencyController.getCurrencies);

  // Convert
  router.route("/convert").post(convertController.postConvert);

  // Usage
  router.route("/usage").get(usageController.getUsage);

  app.use("/v1", router);
  app.use(
    "/api-docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocument)
  );
  app.use("*", (req, res) => {
    res.redirect("/api-docs");
  });
}
