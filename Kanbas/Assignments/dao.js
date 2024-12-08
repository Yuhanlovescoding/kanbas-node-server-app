// import Database from "../Database/index.js";
import model from "./model.js"

export function findAssignmentsForCourse(courseId) {
  // const { assignments } = Database;
  // return assignments.filter(assignment => assignment.course === courseId);
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
    if (!assignment.assignmentId) {
      assignment.assignmentId = `assignment-${Date.now()}`;
    }
  const { _id, ...assignmentData } = assignment;
  return model.create(assignmentData);
  }

export function deleteAssignment(assignmentId) {
    // const { assignments } = Database;
    // Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return model.deleteOne({ _id: assignmentId });
  }

export function updateAssignment(assignmentId, assignmentUpdates) {
    // const { assignments } = Database;
    // const assignment = assignments.find((a) => a._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
    return model.updateOne({ _id: assignmentId }, assignmentUpdates);
}