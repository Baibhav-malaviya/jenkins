import mongoose, { Schema, Document } from "mongoose";

export interface ISubject extends Document {
	name: string;
	score: number;
}

const SubjectSchema: Schema = new Schema({
	name: { type: String, required: true },
	score: { type: Number, required: true },
});

export interface IStudentResult extends Document {
	studentName: string;
	rollNumber: string;
	course: string;
	subjects: ISubject[];
}

const StudentResultSchema: Schema = new Schema({
	studentName: { type: String, required: true },
	rollNumber: { type: String, required: true, unique: true },
	course: { type: String, required: true },
	subjects: [SubjectSchema],
});

const StudentResult =
	mongoose.models.results ||
	mongoose.model<IStudentResult>("results", StudentResultSchema);

export default StudentResult;
