import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    assignmentId: {type: String,required: true, unique: true,  },
    title: {type: String, required: true, },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    dueDate: Date,
    points: {type: Number, required: true, min: 0,},
  },
  { collection: "assignments" }
);
export default assignmentSchema;