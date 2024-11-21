import Task from "../models/task.js";

export const fetchTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ model: tasks, message: "success " });
  } catch (e) {
    res.status(400).json({ error: e.message, message: "access problem" });
  }
};

export const getTaskByID = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
      .populate("author","cayegory")
      .exec();
    if (!task) {
      res.status(404).json({
        message: "Object non Trouvé",
      });
    } else {
      res.status(200).json({
        model: task,
        message: "Object Trouvé",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const AddTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(201).json({ model: task, message: "success " });
  } catch (error) {
    res.status(201).json({
      error: error.message,
      message: "Données Invalides ",
    });
  }
};

export const AddTaskV2 = async (req, res) => {
  try {
    const { title, author } = req.body;
    // Vérification si l'auteur a déjà écrit d'autres livres
    const previousBooks = await Task.find({ author });
    if (previousBooks.length === 0) {
      return res.status(400).json({
        message: "Author must have at least one book before adding a new one.",
      });
    }

    const task = new Task(req.body);
    await task.save();

    res.status(201).json({ model: task, message: "success " });
  } catch (error) {
    res.status(201).json({
      error: error.message,
      message: "Données Invalides ",
    });
  }
};

export const UpdateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!task) {
      res.status(404).json({
        message: "Object non Trouvé",
      });
    } else {
      res.status(200).json({
        model: task,
        message: "Object modifié",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Object supprimé",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
