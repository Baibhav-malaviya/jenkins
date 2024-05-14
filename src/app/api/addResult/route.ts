import { NextRequest, NextResponse } from "next/server";
import StudentResult from "@/model/result.model";
// import connectDB from "../../../../connectDb/connectDB";
import connectDB from "../../../connectDb/connectDB";

export async function POST(req: NextRequest) {
	// Connect to MongoDB
	await connectDB();

	try {
		// Get the request body
		const body = await req.json();

		const student = await StudentResult.findOne({
			rollNumber: body.rollNumber,
		});

		if (student) {
			return NextResponse.json({
				success: false,
				message: `Student with roll No. ${body.rollNumber} already added`,
			});
		}
		// Create a new student result document
		const newStudentResult = {
			studentName: body.studentName,
			rollNumber: body.rollNumber,
			course: body.course,
			subjects: body.subjects.map(
				(subject: { name: string; score: string }) => ({
					name: subject.name,
					score: parseInt(subject.score, 10),
				})
			),
		};

		// Save the new student result document
		const savedStudentResult = await StudentResult.create(newStudentResult);

		return NextResponse.json({
			success: true,
			message: "Student result saved successfully",
			data: savedStudentResult,
		});
	} catch (error) {
		console.error("Error saving student result:", error);
		return NextResponse.json(
			{ error: "Failed to save student result" },
			{ status: 500 }
		);
	}
}
