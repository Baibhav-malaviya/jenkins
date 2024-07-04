import { getCourseById } from "@/helper/getCourse";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { courseId: string };
}): Promise<Metadata> {
	const course = await getCourseById(params.courseId)!;

	return {
		title: `${course.courseTitle} - PickLife Institute`,
		description: course.introduction,
		openGraph: {
			title: `Learn ${course.courseTitle} at PickLife Institute`,
			description: course.introduction,
			images: [
				{
					url: course.backgroundImage,
					width: 1200,
					height: 630,
					alt: `${course.courseTitle} course`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `Master ${course.courseTitle} - PickLife Institute`,
			description: course.introduction,
			images: [course.backgroundImage],
		},
		keywords: [
			...course.categories,
			course.courseTitle,
			"PickLife Institute",
			"online course",
			"education",
		],
		other: {
			"course:objective": course.objective,
		},
	};
}

export default function CourseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
