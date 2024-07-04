"use client";

import React from "react";
import WhyUsCard from "@/components/WhyUsCard";
import {
	FaChalkboardTeacher,
	FaBookReader,
	FaLaptopCode,
	FaClipboardCheck,
	FaTrophy,
	FaCertificate,
} from "react-icons/fa";
import AnimationWrapper from "@/components/AnimationWrapper";

const whyUsData = [
	{
		title: "IDP Certified Trainer",
		description:
			"Our IELTS training program is led by IDP certified trainers who have undergone rigorous training and certification processes. This ensures that you receive expert guidance aligned with the latest IELTS standards and best practices.",
		icon: (
			<div className="p-[6px] from-amber-400 to-amber-200 h-fit rounded-md border-amber-500 border-[2px] bg-gradient-to-br">
				<FaCertificate className="text-4xl text-amber-500" />
			</div>
		),
	},
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
			<header className="text-center my-8">
				<h1 className="text-4xl font-bold text-foreground mb-3">
					Why Choose Our Test Preparation Coaching?
				</h1>
				<p className="text-lg max-w-xl mx-auto">
					Learn what makes our coaching exceptional and how we help you achieve
					top scores.
				</p>
			</header>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 sm:px-10">
				{whyUsData.map((data, idx) => (
					<AnimationWrapper key={idx} index={idx}>
						<WhyUsCard
							title={data.title}
							description={data.description}
							icon={data.icon}
						/>
					</AnimationWrapper>
				))}
			</div>
		</div>
	);
}
