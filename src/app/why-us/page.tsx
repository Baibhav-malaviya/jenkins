import React, { useEffect } from "react";
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
		icon: (
			<div className="p-[6px] from-red-400 to-red-200 h-fit rounded-md border-red-500 border-[2px] bg-gradient-to-br">
				{" "}
				<FaChalkboardTeacher className="text-4xl text-red-500" />{" "}
			</div>
		),
	},
	{
		title: "Comprehensive IELTS Preparation",
		description:
			"Our IELTS preparation program covers all four sections of the exam: Listening, Reading, Writing, and Speaking. We provide extensive practice materials, mock tests, and personalized feedback.",
		icon: (
			<div className="p-[6px] from-blue-400 to-blue-200 h-fit rounded-md border-blue-500 border-[2px] bg-gradient-to-br">
				{" "}
				<FaBookReader className="text-4xl text-blue-500" />
			</div>
		),
	},
	{
		title: "Flexible Learning Options",
		description:
			"We offer both classroom-based and online learning options to cater to different learning preferences and schedules.",
		icon: (
			<div className="p-[6px] from-violet-400 to-violet-200 h-fit rounded-md border-violet-500 border-[2px] bg-gradient-to-br">
				<FaLaptopCode className="text-4xl text-violet-500" />
			</div>
		),
	},
	{
		title: "Real-time Practice and Feedback",
		description:
			"Our instructors conduct regular mock tests and provide detailed feedback on your performance, helping you identify areas for improvement and offering personalized guidance.",
		icon: (
			<div className="p-[6px] from-green-400 to-green-200 h-fit rounded-md border-green-500 border-[2px] bg-gradient-to-br">
				{" "}
				<FaClipboardCheck className="text-4xl text-green-500" />
			</div>
		),
	},
	{
		title: "Proven Track Record",
		description:
			"Our coaching center has a proven track record of helping students achieve their desired IELTS scores and secure admission to prestigious universities or obtain work visas.",
		icon: (
			<div className="p-[6px] from-rose-400 to-rose-200 h-fit rounded-md border-rose-500 border-[2px] bg-gradient-to-br">
				{" "}
				<FaTrophy className="text-4xl text-rose-500" />
			</div>
		),
	},
];

export default function WhyUs() {
	return (
		<div>
			<h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold text-center mb-8">
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
	);
}
