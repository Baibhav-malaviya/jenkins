import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Student Results | PickLife Institute",
	description:
		"Celebrate the achievements of our students. View exam results, success stories, and career placements of PickLife Institute graduates.",
	openGraph: {
		title: "Student Results and Success Stories",
		description:
			"Explore the achievements of PickLife Institute students and alumni.",
		images: [{ url: "/images/results-banner.jpg" }],
	},
};
export default function ResultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
