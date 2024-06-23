import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const CourseCard = ({ course }: any) => {
	return (
		<Card className="w-full max-w-3xl mx-auto overflow-hidden">
			<div className="relative h-48">
				<Image
					src={
						course.backgroundImage ||
						"https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600"
					}
					alt={`${course.courseTitle} background`}
					layout="fill"
					objectFit="cover"
					className="brightness-50"
				/>
				<div className="absolute inset-0 flex items-center justify-between p-6">
					<div>
						<CardTitle className="text-3xl font-bold text-white mb-2">
							{course.courseTitle}
						</CardTitle>
						<div className="flex flex-wrap gap-2">
							{course.categories.map((category: string, index: number) => (
								<Badge
									key={index}
									variant="secondary"
									className="bg-opacity-70"
								>
									{category}
								</Badge>
							))}
						</div>
					</div>
					{course.logoImage && (
						<Image
							src={
								course.logoImage ||
								"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
							}
							alt={`${course.courseTitle} logo`}
							width={80}
							height={80}
							className="rounded-full border-2 border-white"
						/>
					)}
				</div>
			</div>
			<CardContent className="p-6">
				<ScrollArea className="h-[300px] pr-4">
					<div className="mb-6">
						<h3 className="text-lg font-semibold mb-2">Introduction</h3>
						<p className="text-gray-600">{course.introduction}</p>
					</div>
					<Separator className="my-4" />
					<div className="mb-6">
						<h3 className="text-lg font-semibold mb-2">Objective</h3>
						<p className="text-gray-600">{course.objective}</p>
					</div>
				</ScrollArea>
				<Separator className="my-4" />
				<div className="flex justify-between items-start gap-3 sm:gap-0 sm:items-center sm:flex-row flex-col">
					<Link href={"/courses"}>
						<Button variant="outline">Explore More</Button>
					</Link>
					<Link href={"/contact"}>
						<Button>Contact for Enrollment</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default CourseCard;
