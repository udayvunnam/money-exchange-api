import Joi from "@hapi/joi";

export const convertInputSchema = Joi.object().keys({
  value: Joi.number().required(),
  from: Joi.string()
    .required()
    .length(3),
  to: Joi.string()
    .required()
    .length(3)
});

export const usageSchema = Joi.number()
  .integer()
  .required()
  .min(1)
  .max(100);
