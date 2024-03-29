import { Task } from "../models/task.model.js";

export async function getTasksService() {
  const tasks = await Task.find();

  return tasks;
}

export async function createTaskService({ name, description }) {
  const existingTask = await Task.findOne({ name });

  if (existingTask) {
    throw new Error("Task already exists");
  }

  const createdTask = await Task.create({ name, description });

  return createdTask;
}

export async function completeTaskService(task_id) {
  const completedTask = await Task.findByIdAndUpdate(
    task_id,
    { isCompleted: true },
    { new: true }
  );

  if (!completedTask) {
    throw new Error("Task not found");
  }

  return completedTask;
}

export async function deleteTaskService(task_id) {
  const deletedTask = await Task.findByIdAndDelete(task_id);

  if (!deletedTask) {
    throw new Error("Task doesn't exists");
  }

  return deletedTask;
}

export async function deleteCompletedTasksService() {
  const deletedTasks = await Task.deleteMany({ isCompleted: true });

  if (deletedTasks.deletedCount === 0) {
    throw new Error("There are no tasks completed");
  }

  return deletedTasks;
}
