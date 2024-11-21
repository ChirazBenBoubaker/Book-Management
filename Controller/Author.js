import Authrouter from "../routers/author.js";
import Author from "../models/author.js"
export const fetchAuthor = async (req, res) => {
  try{
  const authors = await Author.find();
  res.status(200).json({ model: authors, message: "success " });
  } catch(e) {
    res.status(400).json({ error: e.message,
    message: "access problem" });
  }
};

export const getAuthorByID = async (req, res) => {
    try{
    const author = await author.findOne({ _id: req.params.id });
    if (!author) {
      res.status(404).json({
        message: "Object non Trouvé" ,
      })
    } else{
      res.status(200).json({
        model: author,
        message: "Object Trouvé"
      }) }
    } catch(error) {
      res.status(400).json({error: error.message})
    }
}

export const AddAuthor = async (req, res) => {
  try{
    console.log(req.body)
    const author = new Author(req.body);
    await author.save();

    res.status(201).json({ model: Author, message: "success " });
  } catch(error) {
    res.status(201).json({ 
      error: error.message,
       message: "Données Invalides " });
  }
}


