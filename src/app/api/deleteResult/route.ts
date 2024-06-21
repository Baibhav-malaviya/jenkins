import { NextRequest, NextResponse } from "next/server";
import Result from "@/model/result.model";
import connectDB from "../../../../connectDb/connectDB";

export async function DELETE(req: NextRequest) {
	// Connect to MongoDB
	await connectDB();

	try {
		// Get the roll number from the request URL
		const url = new URL(req.url);
		const rollNumber = url.searchParams.get("rollNumber");
		console.log("roll number: ", rollNumber);
		if (!rollNumber) {
			return NextResponse.json(
				{
					success: false,
					message: "Roll number is required",
				},
				{ status: 400 }
			);
		}

		// Find and update (delete, set the deleted field to true) the student result
		const deletedResult = await Result.findOneAndDelete(
			{ registrationNumber: rollNumber },
			{ new: true }
		);

		if (!deletedResult) {
			return NextResponse.json(
				{
					success: false,
					message: `No student found with roll number ${rollNumber}`,
				},
				{ status: 404 }
			);
		}

		return NextResponse.json({
			success: true,
			message: "Student result deleted successfully",
			data: deletedResult,
		});
	} catch (error) {
		console.error("Error deleting student result:", error);
		return NextResponse.json(
			{ success: false, message: "Failed to delete student result" },
			{ status: 500 }
		);
	}
}
