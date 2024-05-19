import mongoose, { Schema, Document } from "mongoose";

// Define the TypeScript interfaces
export interface IResult extends Document {
	studentName: string;
	registrationNumber: string;
	fathersName: string;
	mothersName: string;
	course?: string;
	resultPdf: string;
	avatar: string;
}

// Create the Mongoose schema based on the interfaces
const ResultSchema: Schema = new Schema(
	{
		studentName: { type: String, required: true },
		registrationNumber: { type: String, required: true, unique: true },
		fathersName: { type: String, required: true },
		mothersName: { type: String, required: true },
		course: { type: String },
		resultPdf: { type: String, required: true, unique: true },
		avatar: { type: String, required: true },
	},
	{ timestamps: true }
);

// Export the model
const Result =
	mongoose.models.results || mongoose.model<IResult>("results", ResultSchema);

export default Result;

// const StudentResult =
// 	mongoose.models.results ||
// 	mongoose.model<IStudentResult>("results", StudentResultSchema);

// export default StudentResult;
