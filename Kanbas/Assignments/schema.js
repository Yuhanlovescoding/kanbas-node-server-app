import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    availability: String,
    dueDate: String,
    startDate: String,
    dueTime: String,
    points: {type: Number, required: true, min: 0,},
    modulesInvolved: String,
    description: String
  },
  { collection: "assignments" }
);
export default assignmentSchema;

