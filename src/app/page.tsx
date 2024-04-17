"use client";
import Image from "next/image";
import WhyUsCard from "@/components/WhyUsCard";
import {
	FaChalkboardTeacher,
	FaBookReader,
	FaLaptopCode,
	FaClipboardCheck,
	FaTrophy,
} from "react-icons/fa";

const whyUsData = [
	{
		title: "Experienced and Qualified Instructors",
		description:
			"Our team of instructors comprises highly experienced and qualified professionals who have a deep understanding of the IELTS exam format and marking criteria.",
		icon: <FaChalkboardTeacher className="text-4xl text-red-500" />,
	},
	{
		title: "Comprehensive IELTS Preparation",
		description:
			"Our IELTS preparation program covers all four sections of the exam: Listening, Reading, Writing, and Speaking. We provide extensive practice materials, mock tests, and personalized feedback.",
		icon: <FaBookReader className="text-4xl text-blue-500" />,
	},
	{
		title: "Flexible Learning Options",
		description:
			"We offer both classroom-based and online learning options to cater to different learning preferences and schedules.",
		icon: <FaLaptopCode className="text-4xl text-violet-500" />,
	},
	{
		title: "Real-time Practice and Feedback",
		description:
			"Our instructors conduct regular mock tests and provide detailed feedback on your performance, helping you identify areas for improvement and offering personalized guidance.",
		icon: <FaClipboardCheck className="text-4xl text-green-500" />,
	},
	{
		title: "Proven Track Record",
		description:
			"Our coaching center has a proven track record of helping students achieve their desired IELTS scores and secure admission to prestigious universities or obtain work visas.",
		icon: <FaTrophy className="text-4xl text-rose-500" />,
	},
];

export default function Home() {
	return (
		<>
			<div>
				<h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold text-center mb-8 mt-20 ">
					Why Choose Our IELTS Coaching Center?
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 sm:px-10">
					{whyUsData.map((data, idx) => (
						<WhyUsCard
							key={idx}
							title={data.title}
							description={data.description}
							icon={data.icon}
						/>
					))}
				</div>
			</div>
		</>
	);
}
