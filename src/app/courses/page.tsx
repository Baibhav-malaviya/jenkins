"use client";
import React, { useState } from "react";
import courses from "../../../data/courses.json"; //courses data from data/courses.json file
import CourseCard from "@/components/CourseCard";
import AnimationWrapper from "@/components/AnimationWrapper";

// const courses = [
// 	{
// 		courseTitle: "C language",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Programming"],
// 	},
// 	{
// 		courseTitle: "C++",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Programming"],
// 	},
// 	{
// 		courseTitle: "Core-java",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Programming"],
// 	},
// 	{
// 		courseTitle: "PHP",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Programming", "Web Development"],
// 	},
// 	{
// 		courseTitle: "Python",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Programming"],
// 	},
// 	{
// 		courseTitle: "HTML",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Web Development"],
// 	},
// 	{
// 		courseTitle: "Wordpress",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Web Development"],
// 	},
// 	{
// 		courseTitle: "Microsoft .NET",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Programming", "Software Development"],
// 	},
// 	{
// 		courseTitle: "Office Automation",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Office Skills"],
// 	},
// 	{
// 		courseTitle: "Coral Draw",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Design"],
// 	},
// 	{
// 		courseTitle: "Photoshop",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Design"],
// 	},
// 	{
// 		courseTitle: "Tally",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Business"],
// 	},
// 	{
// 		courseTitle: "Busy",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Business"],
// 	},
// 	{
// 		courseTitle: "Competitive Exam",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Career Development"],
// 	},
// 	{
// 		courseTitle: "Interview Preparation",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Career Development"],
// 	},
// 	{
// 		courseTitle: "Spoken English",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Languages"],
// 	},
// 	{
// 		courseTitle: "French",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Languages"],
// 	},
// 	{
// 		courseTitle: "Typing",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Office Skills"],
// 	},
// 	{
// 		courseTitle: "Industrial Training",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["Career Development"],
// 	},
// 	{
// 		courseTitle: "CPCF",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["IT Certification"],
// 	},
// 	{
// 		courseTitle: "APCA",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["IT Certification"],
// 	},
// 	{
// 		courseTitle: "BPCF",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["IT Certification"],
// 	},
// 	{
// 		courseTitle: "BPCT",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["IT Certification"],
// 	},
// 	{
// 		courseTitle: "Cal-c",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["IT Certification"],
// 	},
// 	{
// 		courseTitle: "Hardware",
// 		backgroundImage: "",
// 		logoImage: "",
// 		categories: ["IT"],
// 	},
// ];

// export const metadata: Metadata = {
// 	title: "Our Courses | Pick Life Immigration",
// 	description:
// 		"Explore our IELTS and English language courses at Pick Life Immigration Institute in Punjab",
// };

export default function Courses() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	// Extract unique categories
	const categories = [
		"All",
		...Array.from(new Set(courses.flatMap((course) => course.categories))),
	];

	// Filter courses based on selected category
	const filteredCourses =
		selectedCategory === "All"
			? courses
			: courses.filter((course) =>
					course.categories.includes(selectedCategory)
			  );
	return (
		<section>
			<header className="text-center my-8">
				<h1 className="text-4xl font-bold text-foreground mb-3">
					Explore Our Course Catalog
				</h1>
				<p className="text-lg max-w-xl mx-auto">
					Discover expert-led courses designed to enhance your skills and
					advance your career.
				</p>
			</header>
			{/* Category sorting section */}
			<div className="overflow-x-auto py-4 mb-6">
				<div className="flex flex-wrap justify-center gap-2 px-4">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                ${
									selectedCategory === category
										? "bg-primary text-primary-foreground"
										: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
								}`}
						>
							{category}
						</button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-6 md:px-24 place-items-center">
				{filteredCourses.map((course, idx) => (
					<AnimationWrapper key={idx} index={idx}>
						<CourseCard
							id={course.id}
							key={idx}
							backgroundImage={course.backgroundImage}
							logoImage={course.logoImage}
							title={course.courseTitle}
						/>
					</AnimationWrapper>
				))}
			</div>
		</section>
	);
}
