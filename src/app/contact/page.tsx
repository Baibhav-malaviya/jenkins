import ContactForm from "@/components/ContactForm";
import ContactPageIntro from "@/components/ContactPageIntro";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Contact Us | PickLife Institute",
	description:
		"Get in touch with PickLife Institute. We&apos;re here to answer your questions and help you start your educational journey.",
	openGraph: {
		title: "Contact PickLife Institute",
		description: "Reach out to us for any inquiries or support.",
		images: [{ url: "/images/contact-banner.jpg" }],
	},
};

export default function ContactPage() {
	return (
		<div>
			<ContactPageIntro />
			<ContactForm />
		</div>
	);
}
