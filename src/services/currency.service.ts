import axios from "axios";
import { ConvertInput } from "convert-input";
import { APP_CONST } from "../util/constants";
import { updateUsage } from "./firestore.service";

export let convert = async (data: ConvertInput) => {
  const { value, from, to } = data;
  const response = await axios.get(`${APP_CONST.EXCHANGE_RATES_API}/latest`, {
    params: {
      base: from,
      symbols: to
    }
  });
  const exchangeRate = response.data.rates[to];
  const convertedValue = exchangeRate * value;

  // On successful conversion, add it to firestore for usage history
  updateUsage({ value, from, to, exchangeRate, convertedValue });

  return { convertedValue, exchangeRate };
};
