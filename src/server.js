import express from "express";
import cors from "cors";
import { dbConnection } from "./db/index.js";
import { router } from "./routes/task.routes.js";
import { PORT, FRONTEND_URL } from "./config/index.js";

const app = express();

app.use(cors({ origin: [FRONTEND_URL] }));

app.use(express.json());

app.use("/api", router);

dbConnection();

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
