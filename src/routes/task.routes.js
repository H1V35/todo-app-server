import { Router } from "express";
import {
  getTasks,
  createTask,
  toggleCompleteTask,
  deleteTask,
  deleteCompletedTasks,
} from "../controllers/task.controller.js";

export const tasksRouter = Router();

tasksRouter.get("/", getTasks);

tasksRouter.post("/", createTask);

tasksRouter.post("/:task_id/complete", toggleCompleteTask);

tasksRouter.delete("/:task_id/delete", deleteTask);

tasksRouter.delete("/delete-completed", deleteCompletedTasks);
