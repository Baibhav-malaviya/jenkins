import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us | PickLife Institute",
	description:
		"Learn about PickLife Institute's mission, vision, and commitment to quality education. Discover our history and meet our team.",
	openGraph: {
		title: "About PickLife Institute",
		description:
			"Discover our story and commitment to excellence in education.",
		images: [
			{
				url: "/glimps-image/IMG-20240622-WA0021.jpghttps://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217197/testimonial_6_pv5tyl.jpg",
			},
		],
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
