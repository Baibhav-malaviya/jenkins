import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../connectDb/connectDB";
import Email from "@/model/email.model";

export async function POST(req: NextRequest) {
	await connectDB();

	try {
		const body = await req.json();
		const { email } = body;

		if (!email)
			return NextResponse.json(
				{
					success: false,
					message: "Email is required",
				},
				{ status: 500 }
			);

		const savedEmail = await Email.create(body);

		if (!savedEmail)
			return NextResponse.json(
				{
					success: false,
					message: "Error in email saved",
				},
				{ status: 500 }
			);
		return NextResponse.json(
			{
				success: true,
				message: "Email saved successfully",
				data: savedEmail,
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				message: "Error in email saving",
			},
			{
				status: 400,
			}
		);
	}
}
