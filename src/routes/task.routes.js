import { Router } from "express";
import {
  getTasks,
  createTask,
  toggleCompleteTask,
  deleteTask,
  deleteCompletedTasks,
} from "../controllers/task.controller.js";

export const router = Router();

router.get("/tasks", getTasks);

router.post("/tasks", createTask);

router.post("/tasks/:task_id/complete", toggleCompleteTask);

router.delete("/tasks/:task_id/delete", deleteTask);

router.delete("/tasks/delete-completed", deleteCompletedTasks);
