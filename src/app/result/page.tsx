"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CompareResult from "@/components/CompareResult";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableCaption,
} from "@/components/ui/table";
import { FaSort } from "react-icons/fa";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

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

const students: Student[] = [
	{
		studentName: "John Doe",
		rollNumber: "001",
		course: "Mathematics",
		subjects: [
			{ name: "Calculus", score: "85" },
			{ name: "Linear Algebra", score: "92" },
			{ name: "Differential Equations", score: "78" },
		],
	},
	{
		studentName: "Jane Smith",
		rollNumber: "002",
		course: "Computer Science",
		subjects: [
			{ name: "Data Structures", score: "90" },
			{ name: "Algorithms", score: "88" },
			{ name: "Operating Systems", score: "82" },
		],
	},
	{
		studentName: "Michael Johnson",
		rollNumber: "003",
		course: "Physics",
		subjects: [
			{ name: "Mechanics", score: "91" },
			{ name: "Electromagnetism", score: "86" },
			{ name: "Quantum Mechanics", score: "79" },
		],
	},
	{
		studentName: "Emily Brown",
		rollNumber: "004",
		course: "Chemistry",
		subjects: [
			{ name: "Organic Chemistry", score: "87" },
			{ name: "Inorganic Chemistry", score: "93" },
			{ name: "Physical Chemistry", score: "84" },
		],
	},
	{
		studentName: "David Wilson",
		rollNumber: "005",
		course: "Biology",
		subjects: [
			{ name: "Cell Biology", score: "89" },
			{ name: "Genetics", score: "92" },
			{ name: "Biochemistry", score: "81" },
		],
	},
	{
		studentName: "Tim David",
		rollNumber: "006",
		course: "Computer Science",
		subjects: [
			{ name: "Computer Network", score: "49" },
			{ name: "Operating System", score: "76" },
			{ name: "Software Engineering", score: "64" },
		],
	},
];

const StudentResult = () => {
	const [rollNumber, setRollNumber] = useState("");
	const [student, setStudent] = useState<Student | null>(null);
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// const handleSearch = () => {
	// 	const foundStudent = students.find((s) => s.rollNumber === rollNumber);
	// 	setStudent(foundStudent || null);
	// };

	const handleSearch = async (rollNumber: string) => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				`/api/getResultByRollNumber?rollNumber=${rollNumber}`
			);

			if (response.data.success) {
				console.log(response.data);
				setStudent(response.data.data);
				// return response.data.data;s
			} else {
				throw new Error(response.data.message);
			}
		} catch (error: any) {
			if (axios.isAxiosError(error) && error.response?.status === 404) {
				// Handle 404 Not Found error
				setStudent(null);
				// setError(`Student with roll number ${rollNumber} not found`);
			} else {
				console.log("Error fetching student result:", error.message);
				setStudent(null);
				// setError("Failed to fetch student result");
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleSort = () => {
		setSortOrder(sortOrder === "asc" ? "desc" : "asc");
	};

	const calculatePercentage = (scores: string[]) => {
		const totalScore = scores.reduce((acc, curr) => acc + parseFloat(curr), 0);
		const percentage = (totalScore / (scores.length * 100)) * 100;
		return percentage.toFixed(2);
	};

	const sortedSubjects = student
		? [...student.subjects].sort((a, b) => {
				const scoreA = parseFloat(a.score);
				const scoreB = parseFloat(b.score);
				if (sortOrder === "asc") {
					return scoreA - scoreB;
				} else {
					return scoreB - scoreA;
				}
		  })
		: [];

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
			<div className=" outline-2 rounded-lg outline outline-muted p-5">
				<div className="mb-4 flex items-center gap-2">
					<Input
						className="bg-background text-foreground"
						type="text"
						placeholder="Enter roll number"
						value={rollNumber}
						onChange={(e) => setRollNumber(e.target.value)}
					/>
					<Button onClick={() => handleSearch(rollNumber)}>
						{isLoading ? "Searching..." : "Search"}
					</Button>
				</div>
				{student ? (
					<div>
						<h2 className="text-2xl font-bold mb-4">
							Student Name: {student.studentName}
						</h2>
						<h3 className="text-xl font-bold mb-2">Course: {student.course}</h3>
						<Table>
							<TableCaption>
								Result for the roll number: {student.rollNumber}
							</TableCaption>
							<TableHeader>
								<TableRow>
									<TableHead>Subject</TableHead>
									<TableHead className="flex items-center gap-2">
										Score
										<Button
											variant="ghost"
											onClick={handleSort}
											className="hover:bg-muted"
										>
											<FaSort />
										</Button>
									</TableHead>
									<TableHead>Highest</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{sortedSubjects.map((subject, index) => (
									<TableRow key={index}>
										<TableCell>{subject.name}</TableCell>
										<TableCell>{subject.score}</TableCell>
										<TableCell>{Number(subject.score) + 1}</TableCell>
									</TableRow>
								))}
								<TableRow>
									<TableCell className="font-bold">Percent</TableCell>
									<TableCell className="font-bold">
										{calculatePercentage(sortedSubjects.map((s) => s.score))}%
									</TableCell>
									<TableCell className="font-bold">98%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-bold">Grade</TableCell>
									<TableCell className="font-bold">
										<Badge
											variant={
												parseFloat(
													calculatePercentage(
														sortedSubjects.map((s) => s.score)
													)
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
					rollNumber && (
						<Alert variant="destructive">
							No student found with the given roll number.
						</Alert>
					)
				)}
			</div>
			<div>
				<CompareResult
					topFiveStudents={students.slice(0, 5)}
					currentStudent={student}
				/>
			</div>
		</section>
	);
};

export default StudentResult;
