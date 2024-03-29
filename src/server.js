import express from "express";
import { dbConnection } from "./db/index.js";
import { router } from "./routes/task.routes.js";
import { PORT } from "./config/index.js";

const app = express();

app.use(express.json());

app.use("/api", router);

dbConnection();

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
