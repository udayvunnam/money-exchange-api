import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { getUsage as getUsageFromFirestore } from "../services/firestore.service";

export let getUsage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const usageLimit = parseInt(req.query.limit, 10) || 10;
  try {
    const lastConversions = await getUsageFromFirestore(usageLimit);
    res.status(status.OK).json(lastConversions);
  } catch (error) {
    next(error);
  }
};
