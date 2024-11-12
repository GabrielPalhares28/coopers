// controllers/taskController.cjs

const Task = require('../models/Task.cjs');

exports.getTasks = async (req, res) => {
  try {
    const { status } = req.query;
    const tasks = await Task.findAll({ where: status ? { done: status === 'done' } : {} });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { text } = req.body;
    
    
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return res.status(400).json({ error: 'Task text is required' });
    }

    const newTask = await Task.create({ text });
    res.status(201).json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create task' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, done } = req.body;
    
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    
    task.text = text ?? task.text;
    task.done = done ?? task.done;
    await task.save();
    
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update task' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    
    await Task.destroy({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

exports.deleteAllTasks = async (req, res) => {
  try {
    const { status } = req.query;
    await Task.destroy({ where: { done: status === 'done' } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete tasks' });
  }
};
