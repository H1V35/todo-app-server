import { connect } from "mongoose";
import { MONGO_URL } from "../config/index.js";

export async function dbConnection() {
  const dbConfig = {
    url: MONGO_URL,
  };

  try {
    await connect(dbConfig.url);
    console.log("Connected to Mongodb Atlas");
  } catch (error) {
    console.error("Error connecting to Mongodb Atlas", error);
  }
}
