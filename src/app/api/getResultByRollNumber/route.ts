import { NextRequest, NextResponse } from "next/server";
import StudentResult from "@/model/result.model";
import connectDB from "../../../connectDb/connectDB";

export async function GET(req: NextRequest) {
	// Connect to MongoDB
	await connectDB();
	try {
		// Get the roll number from the request body
		const { searchParams } = new URL(req.url);
		const rollNumber = searchParams.get("rollNumber");

		// Find the student result by roll number
		const studentResult = await StudentResult.findOne({ rollNumber });

		if (!studentResult) {
			return NextResponse.json(
				{
					success: false,
					message: `Student with roll number ${rollNumber} not found`,
				},
				{ status: 404 }
			);
		}

		// Return the student result
		return NextResponse.json({
			success: true,
			message: "Student result fetched successfully.",
			data: studentResult,
		});
	} catch (error) {
		console.error("Error retrieving student result:", error);
		return NextResponse.json(
			{ error: "Failed to retrieve student result" },
			{ status: 500 }
		);
	}
}
