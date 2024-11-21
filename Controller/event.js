import Event from "../models/Event.js";
import eventValidation from "../validator/eventValidator.js";


export const AddEvent = async (req, res) => {
  try {
    console.log(req.body);

    // Validation avec Joi
    const validatedData = await eventValidation.validateAsync(req.body);

    // Création de l'événement
    const event = new Event(validatedData);
    await event.save();

    // Réponse réussie
    res.status(201).json({ model: event, message: "success " });
  } catch (error) {
    // Gestion des erreurs
    res.status(400).json({ 
      error: error.message, 
      message: "Données Invalides" 
    });
  }
}


