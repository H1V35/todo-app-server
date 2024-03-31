import express from "express";
import cors from "cors";
import { dbConnection } from "./db/index.js";
import { tasksRouter } from "./routes/task.routes.js";
import { PORT } from "./config/index.js";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api/tasks", tasksRouter);

dbConnection();

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
