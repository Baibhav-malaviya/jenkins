"use client";
import React, { use, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import PopupModal from "@/components/PopupModal";
import { error } from "console";

interface Subject {
	name: string;
	score: string;
}

interface Student {
	studentName: string;
	registrationNumber: string;
	course?: string;
	fathersName: string;
	mothersName: string;
	avatar: string;
	resultPdf: string;
}

const fakeStudent = {
	studentName: "Baibhav",
	registrationNumber: "801",
	fathersName: "MyFather",
	mothersName: "MyMother",
	avatar:
		"http://res.cloudinary.com/baibhavmalaviya/image/upload/v1716103498/pick-life/q2hhljmf9cdwxg2kyf6z.jpg",
	resultPdf:
		"http://res.cloudinary.com/baibhavmalaviya/image/upload/v1716103500/pick-life/zuynmsijdmpqlgde1gci.jpg",
};

const StudentResult = () => {
	const [rollNumber, setRollNumber] = useState("");
	const [student, setStudent] = useState<Student | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSearch = async (rollNumber: string) => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				`/api/getResultByRollNumber?registrationNumber=${rollNumber}`
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
				setError(`Student with roll number ${rollNumber} not found`);
			} else {
				console.log("Error fetching student result:", error.message);
				setStudent(null);
				setError("Failed to fetch student result");
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section className="">
			<div className=" outline-2 rounded-lg outline outline-muted p-3 sm:p-5 overflow-scroll mx-auto w-full sm:w-1/2">
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
					<div className="w-[500px] flex justify-between">
						<div className="flex justify-between ">
							<div className="">
								<Table>
									<TableBody>
										<TableRow>
											<TableCell className="font-bold">
												Student Name:{" "}
											</TableCell>
											<TableCell className="text-sm ">
												{student.studentName}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-bold">
												Registration Number:{" "}
											</TableCell>
											<TableCell className="text-sm ">
												{student.registrationNumber}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-bold">
												Father&apos;s Name:{" "}
											</TableCell>
											<TableCell className="text-sm ">
												{student.fathersName}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-bold">
												Mother&apos;s Name:{" "}
											</TableCell>
											<TableCell className="text-sm ">
												{student.mothersName}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<Button
									onClick={() => setIsOpen(true)}
									className="m-3 rounded-full"
								>
									View Result{" "}
									<IoEyeOutline className="font-bold mx-2 text-green-500" />
								</Button>
								<PopupModal
									isOpen={isOpen}
									setIsOpen={setIsOpen}
									content={
										<Image
											src={student.resultPdf}
											alt="Descriptive Alt Text"
											width={800} // Specify your desired width
											height={600} // Specify your desired height
										/>
									}
								/>
							</div>
							<div className="flex flex-col items-center flex-1 justify-between">
								<Image
									src={student.avatar}
									alt="Descriptive Alt Text"
									width={800} // Specify your desired width
									height={600} // Specify your desired height
									className="m-2 rounded"
								/>
							</div>
						</div>

						{/* <Table>
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
						</Table> */}
					</div>
				) : (
					error && (
						<Alert variant="destructive">
							No student found with the given roll number.
						</Alert>
					)
				)}
			</div>
		</section>
	);
};

export default StudentResult;
