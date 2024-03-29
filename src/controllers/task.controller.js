import {
  getTasksService,
  createTaskService,
  completeTaskService,
  deleteTaskService,
  deleteCompletedTasksService,
} from "../services/task.service.js";

export async function getTasks(_req, res) {
  try {
    const tasks = await getTasksService();
    res.status(200).json({ data: tasks });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Something went wrong..." });
  }
}

export async function createTask(req, res) {
  try {
    const taskData = req.body;
    const task = await createTaskService(taskData);
    res.status(200).json({ data: task });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Something went wrong..." });
  }
}

export async function completeTask(req, res) {
  try {
    const { task_id } = req.params;
    const task = await completeTaskService(task_id);
    res.status(200).json({ data: task, message: "Task completed!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Something went wrong..." });
  }
}

export async function deleteTask(req, res) {
  try {
    const { task_id } = req.params;
    await deleteTaskService(task_id);
    res.status(200).json({ message: "Task deleted!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Something went wrong..." });
  }
}

export async function deleteCompletedTasks(_req, res) {
  try {
    await deleteCompletedTasksService();
    res.status(200).json({ message: "Completed tasks deleted!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Something went wrong..." });
  }
}
