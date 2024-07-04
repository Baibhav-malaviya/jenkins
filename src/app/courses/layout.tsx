import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Courses | PickLife Institute",
	description:
		"Explore our wide range of courses in programming, design, business, and more. Find the perfect course to advance your career.",
	openGraph: {
		title: "Courses at PickLife Institute",
		description:
			"Discover our comprehensive course catalog and start your learning journey.",
		images: [
			{
				url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217197/testimonial_6_pv5tyl.jpg",
			},
		],
	},
};

import React from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
