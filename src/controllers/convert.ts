import Joi from "@hapi/joi";
import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { convert } from "../services/currency.service";
import logger from "../util/logger";
import { convertInputSchema } from "../util/validator";

export let postConvert = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = Joi.validate(req.body, convertInputSchema);
  if (error) {
    logger.error(error);
    res
      .status(status.METHOD_NOT_ALLOWED)
      .end({ error, message: "Invalid input" });
  }

  const { from, to, value } = req.body;
  const amount = parseInt(value, 10);
  try {
    const { convertedValue, exchangeRate } = await convert({
      value: amount,
      from,
      to
    });
    res.status(status.OK).json({
      convertedValue,
      exchangeRate
    });
  } catch (error) {
    next(error);
  }
};
