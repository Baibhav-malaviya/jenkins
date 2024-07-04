import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Why-Us | PickLife Institute",
	description:
		"Discover why PickLife Institute is the best choice for your education and career development. Learn about our unique advantages and student success stories.",
	openGraph: {
		title: "Why Choose PickLife Institute",
		description:
			"Uncover the PickLife advantage in education and career development.",
	},
};

export default function WhyUsLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
