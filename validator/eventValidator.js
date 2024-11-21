import Joi from "joi";

export const eventValidation = Joi.object({
  titre: Joi.string().required().messages({
    "string.empty": "Le titre est obligatoire.",
  }),
  start: Joi.date().required().messages({
    "date.base": "La date de début doit être valide.",
    "any.required": "La date de début est obligatoire.",
  }),
  end: Joi.date().greater(Joi.ref("start")).required().messages({
    "date.base": "La date de fin doit être valide.",
    "date.greater": "La date de fin doit être après la date de début.",
    "any.required": "La date de fin est obligatoire.",
  }),
});

  
  export default eventValidation;
  