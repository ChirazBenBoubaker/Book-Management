import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userValidationSchema from "../validator/UserValidator.js";

export const JWT_SECRET = "chiraz";
export const SignUp = async (req, res, next) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    // Valider le corps de la requête avec Joi
    const validatedData = await userValidationSchema.validateAsync(req.body);
    
    // const user = new User({
    //   // email: req.body.email,
    //   ...req.body,
    //   password: hashedPwd,
    // });
    const user = new User(validatedData);
    await user.save();
    //delete user.password;
    const { password, ...newUser } = user.toObject();
    res.status(201).json({ model: newUser, message: "success " });
  } catch (err) {
    if (err.isJoi) {
      // Retourner les erreurs Joi si présentes
      res.status(400).json({ message: err.details[0].message });
    } else {
      // Autres erreurs
      res.status(500).json({ message: err.message });
    }
  }
};

export const login = async (req, res) => {
  try {
    //find User by email
    const user = await User.findOne({ email: req.body.email });
    //if not found return error
    if (!user) {
      return res
        .status(401)
        .json({ message: "Login ou mot de passe non valide" });
    }
    //else compare passwd
    const valid = await bcrypt.compare(req.body.password, user.password);
    // if not match return error
    if (!valid) {
      return res
        .status(401)
        .json({ message: "Login de pot de passe invalide" });
    }
    // else create token and return it
    res.status(200).json({
      token: jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// token pour le token(format json) fih chaine chiffré : il contient enty chkon (id) , il va contenir qu'est ce que le token va contenir
