import Category from "../models/category.js";

export const AddCategory = async (req, res) => {
  try {
    console.log(req.body);
    const category = new Category(req.body);
    await category.save();

    res.status(201).json({ model: category, message: "success " });
  } catch (error) {
    res.status(201).json({
      error: error.message,
      message: "Données Invalides ",
    });
  }
};
