import Joi from "joi";

const userValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "any.required": "Password is required",
  }),
  role: Joi.string().valid("admin", "user").default("user").messages({
    "any.only": "Role must be either 'admin' or 'user'",
  }),
});

export default userValidationSchema;
