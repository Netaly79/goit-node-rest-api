import Joi from "joi";

export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^\(\d{3}\) \d{3}-\d{4}$/),
}).min(1);

export const updateStatusSchema = Joi.object({
  favorite: Joi.bool().required()
}).min(1);