import { NextRequest, NextResponse } from "next/server";
import StudentResult from "@/model/result.model";
import connectDB from "../../../../connectDb/connectDB";

export async function GET(req: NextRequest) {
	try {
		// Connect to MongoDB
		await connectDB();

		// Find the top 5 students based on overall percentage
		const topStudents = await StudentResult.aggregate([
			{
				$addFields: {
					totalScore: { $sum: "$subjects.score" },
					totalSubjects: { $size: "$subjects" },
				},
			},
			{
				$addFields: {
					overallPercentage: {
						$multiply: [
							{
								$divide: [
									"$totalScore",
									{ $multiply: [100, "$totalSubjects"] },
								],
							},
							100,
						],
					},
				},
			},
			{ $sort: { overallPercentage: -1 } },
			{ $limit: 5 },
			{
				$project: {
					studentName: 1,
					rollNumber: 1,
					course: 1,
					overallPercentage: 1,
					_id: 0,
				},
			},
		]);

		// Return the top students
		return NextResponse.json({
			success: true,
			data: topStudents,
		});
	} catch (error) {
		console.error("Error retrieving top students:", error);
		return NextResponse.json(
			{ error: "Failed to retrieve top students" },
			{ status: 500 }
		);
	}
}
