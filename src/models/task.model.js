import { Schema, model } from "mongoose";

const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model("Task", TaskSchema);
