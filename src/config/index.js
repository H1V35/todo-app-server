import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 5005;
export const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173";
export const MONGO_URL = process.env.MONGO_URL;
