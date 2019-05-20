import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { getCurrencies as getCurrenciesFromFirestore } from "../services/firestore.service";

export let getCurrencies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const currencyList = await getCurrenciesFromFirestore();
    res.status(status.OK).json(currencyList);
  } catch (error) {
    next(error);
  }
};
