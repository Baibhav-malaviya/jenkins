"use client";

import { getCourseById } from "@/helper/getCourse";
import { useRouter } from "next/navigation";
import React from "react";
import Course from "../../../components/Course";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IoAlertCircle } from "react-icons/io5";
import Link from "next/link";

function CoursePage({ params }: any) {
	const router = useRouter();
	const { courseId } = params;
	const course = getCourseById(courseId);

	if (!course)
		return (
			<Card className="w-full max-w-3xl mx-auto">
				<CardContent className="p-6">
					<Alert variant="destructive">
						<IoAlertCircle className="h-4 w-4" />
						<AlertTitle>Course Not Found</AlertTitle>
						<AlertDescription>
							We couldn&apos;t find the course you&apos;re looking for. It may
							have been removed or doesn&apos;t exist.
						</AlertDescription>
					</Alert>
					<div className="mt-6 text-center">
						<Link href={"/courses"}>
							<Button variant="outline">Return to Course Catalog</Button>
						</Link>
					</div>
				</CardContent>
			</Card>
		);
	return (
		<div>
			<Course course={course} />
		</div>
	);
}

export default CoursePage;
