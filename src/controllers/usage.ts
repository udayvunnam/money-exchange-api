import Joi from "@hapi/joi";
import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { getUsage as getUsageFromFirestore } from "../services/firestore.service";
import logger from "../util/logger";
import { usageSchema } from "../util/validator";

export let getUsage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = Joi.validate(req.query.limit, usageSchema);
  if (error) {
    logger.error(error);
    res
      .status(status.METHOD_NOT_ALLOWED)
      .json({ error, message: "Invalid input" });
  }

  const usageLimit = parseInt(req.query.limit, 10) || 10;
  try {
    const lastConversions = await getUsageFromFirestore(usageLimit);
    res.status(status.OK).json(lastConversions);
  } catch (error) {
    next(error);
  }
};
