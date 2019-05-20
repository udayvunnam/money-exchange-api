import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { convert } from "../services/currency.service";

export let postConvert = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const value = parseInt(req.body.value, 10);
  const { from, to } = req.body;

  try {
    const { convertedValue, exchangeRate } = await convert({ value, from, to });
    res.status(status.OK).json({
      convertedValue,
      exchangeRate
    });
  } catch (error) {
    next(error);
  }
};
