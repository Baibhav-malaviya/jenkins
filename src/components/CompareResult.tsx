"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableCaption,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import WhyUsCardSkeleton from "@/components/skelton/WhyUsCardSkelton";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { Button } from "./ui/button";

interface Subject {
	name: string;
	score: string;
}

interface Student {
	studentName: string;
	rollNumber: string;
	course: string;
	subjects: Subject[];
}

interface StudentResultDetailsProps {
	topFiveStudents: Student[];
	currentStudent: Student | null;
}

const StudentResultDetails = ({
	// topFiveStudents,
	currentStudent,
}: StudentResultDetailsProps) => {
	const [topFiveStudents, setTopFiveStudents] = useState([]);
	// const [topStudents, setTopStudents] = useState([]);

	useEffect(() => {
		const fetchTopStudents = async () => {
			try {
				const response = await axios.get("/api/topStudents");
				if (response.data.success) {
					setTopFiveStudents(response.data.data);
					console.log("Top 5 Students:", response.data.data);
				} else {
					console.error("Failed to fetch top students:", response.data.error);
				}
			} catch (error) {
				console.error("Error fetching top students:", error);
			}
		};

		fetchTopStudents();
	}, []);

	const calculatePercentage = (scores: string[]) => {
		const totalScore = scores.reduce((acc, curr) => acc + parseFloat(curr), 0);
		const percentage = (totalScore / (scores.length * 100)) * 100;
		return percentage.toFixed(2);
	};

	// Initialize variables with default values
	let currentStudentRank = 0;
	let marksNeededForTop5 = 0;
	let marksNeededForTop52 = 0;
	let currentStudentPercentage = 0;
	let sortedSubjects: Subject[] = [];

	if (currentStudent) {
		currentStudentPercentage = parseFloat(
			calculatePercentage(currentStudent.subjects.map((s) => s.score))
		);

		sortedSubjects = currentStudent.subjects.sort((a, b) => {
			const scoreA = parseFloat(a.score);
			const scoreB = parseFloat(b.score);
			return scoreB - scoreA;
		});

		// Calculate other relevant data based on currentStudent
		// ...

		//todo calculate the marks to get into top 5
		// const marksNeededForTop5 =
		// 	currentStudentRank > 5
		// 		? parseFloat(
		// 				calculatePercentage(topFiveStudents[4].subjects.map((s) => s.score))
		// 		  ) - currentStudentPercentage
		// 		: 0;

		// const marksNeededForTop52 =
		// 	currentStudentRank > 5
		// 		? topFiveStudents[4].subjects.reduce(
		// 				(acc, curr) => acc + parseFloat(curr.score),
		// 				0
		// 		  ) -
		// 		  currentStudentPercentage * 3
		// 		: 0;

		// Sort the subjects in descending order based on scores
		// const sortedSubjects = currentStudent.subjects.sort((a, b) => {
		// 	const scoreA = parseFloat(a.score);
		// 	const scoreB = parseFloat(b.score);
		// 	return scoreB - scoreA;
		// });
	}

	return (
		<div className="flex flex-col">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Rank</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Percentage</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{/* Map over topFiveStudents and render their details */}
					{topFiveStudents.length > 0 ? (
						topFiveStudents.map((student, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{student["studentName"]}</TableCell>
								<TableCell>
									{Number(student["overallPercentage"]).toFixed(2)}%
								</TableCell>
							</TableRow>
						))
					) : (
						<WhyUsCardSkeleton />
					)}
					{currentStudent && (
						<TableRow>
							<TableCell className="font-bold">Your Result</TableCell>
							<TableCell className="font-bold">
								{calculatePercentage(sortedSubjects.map((s) => s.score))}%
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			{/* //todo we will work on it later */}
			{currentStudent ? (
				<div>
					<h2 className="text-2xl font-bold mb-4">
						Student Name: {currentStudent.studentName}
					</h2>
					<h3 className="text-xl font-bold mb-2">
						Course: {currentStudent.course}
					</h3>
					<div className="flex items-center justify-between mr-2 my-4">
						<p>
							Your rank:{" "}
							<Badge
								variant={
									currentStudentRank <= 5
										? "default"
										: currentStudentRank <= 10
										? "secondary"
										: "outline"
								}
							>
								{currentStudentRank}
							</Badge>
						</p>
						{currentStudentRank > 5 && (
							<p>
								Marks needed to get into the top 5:{" "}
								<span className="font-bold">
									{marksNeededForTop52.toFixed(0)}
								</span>
							</p>
						)}
					</div>
					{currentStudentRank <= 5 && (
						<p className="font-bold">You are in the top 5!</p>
					)}
					<Table>
						<TableCaption>
							Result for the roll number: {currentStudent.rollNumber}
						</TableCaption>
						{/* <TableHeader>
							<TableRow>
								<TableHead>Student Name</TableHead>
								<TableHead>Overall Percentage</TableHead>
							</TableRow>
						</TableHeader> */}
						<TableBody>
							<TableRow>
								<TableCell className="font-bold">Your Result</TableCell>
								<TableCell className="font-bold">
									{calculatePercentage(sortedSubjects.map((s) => s.score))}%
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-bold">Grade</TableCell>
								<TableCell className="font-bold">
									<Badge
										variant={
											parseFloat(
												calculatePercentage(sortedSubjects.map((s) => s.score))
											) >= 80
												? "default"
												: parseFloat(
														calculatePercentage(
															sortedSubjects.map((s) => s.score)
														)
												  ) >= 70
												? "secondary"
												: parseFloat(
														calculatePercentage(
															sortedSubjects.map((s) => s.score)
														)
												  ) >= 60
												? "outline"
												: "destructive"
										}
									>
										{parseFloat(
											calculatePercentage(sortedSubjects.map((s) => s.score))
										) >= 80
											? "A"
											: parseFloat(
													calculatePercentage(
														sortedSubjects.map((s) => s.score)
													)
											  ) >= 70
											? "B"
											: parseFloat(
													calculatePercentage(
														sortedSubjects.map((s) => s.score)
													)
											  ) >= 60
											? "C"
											: "D"}
									</Badge>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			) : (
				<Alert variant="destructive">No current student data available.</Alert>
			)}
		</div>
	);
};

export default StudentResultDetails;
