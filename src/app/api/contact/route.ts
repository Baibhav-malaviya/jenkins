import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../connectDb/connectDB";
import ContactForm from "@/model/contactForm.model";
import Email from "@/model/email.model";

export async function POST(req: NextRequest) {
	await connectDB();

	try {
		const body = await req.json();
		const { name, email, phone } = body;

		if (!name || !email || !phone)
			return NextResponse.json(
				{
					success: false,
					message: "All fields (name, email, phone) are required",
				},
				{
					status: 400,
				}
			);

		const contactInfo = await ContactForm.create(body);

		if (!contactInfo)
			return NextResponse.json(
				{
					success: false,
					message: "Error in saving the contact form info.",
				},
				{
					status: 500,
				}
			);

		return NextResponse.json(
			{
				success: true,
				message: "Contact form submitted successfully.",
				data: contactInfo,
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		console.error("Error in submitting contact form.", error);
		return NextResponse.json(
			{
				success: false,
				message: "Failed to submit the contact form.",
			},
			{ status: 500 }
		);
	}
}
