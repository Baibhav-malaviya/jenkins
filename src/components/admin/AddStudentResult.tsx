"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaTrashAlt } from "react-icons/fa";
import { HiDuplicate } from "react-icons/hi";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "../ui/use-toast";

interface Subject {
	name: string;
	score: string;
}

const AddStudentResult = () => {
	const [studentName, setStudentName] = useState("");
	const [rollNumber, setRollNumber] = useState("");
	const [course, setCourse] = useState("");
	const [subjects, setSubjects] = useState<Subject[]>([
		{ name: "", score: "" },
	]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const { toast } = useToast();

	const nameInputRef = useRef<HTMLInputElement>(null);

	const handleSubjectChange = (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = event.target;
		const updatedSubjects = [...subjects];
		updatedSubjects[index][name as keyof Subject] = value;
		setSubjects(updatedSubjects);
	};

	const handleAddSubject = (e: any) => {
		e.preventDefault();
		setSubjects([...subjects, { name: "", score: "" }]);
	};

	const handleDuplicateSubject = (index: number) => {
		const duplicatedSubject = { ...subjects[index] };
		setSubjects([...subjects, duplicatedSubject]);
	};

	const handleRemoveSubject = (index: number) => {
		const updatedSubjects = [...subjects];
		updatedSubjects.splice(index, 1);
		setSubjects(updatedSubjects);
	};

	const handleSubmit = async () => {
		try {
			// Create the request payload
			const requestData = {
				studentName,
				rollNumber,
				course,
				subjects: subjects.map((subject) => ({
					name: subject.name,
					score: subject.score,
				})),
			};

			// Make the API call using Axios
			setIsLoading(true);
			const response = await axios.post("/api/addResult", requestData);
			console.log(response.data); //! we have to check the response by logging it
			setIsLoading(false);
			// Handle the response
			if (response.data.success) {
				console.log("Student result saved successfully:", response.data.data);
				toast({
					title: "Result Saved!",
					description: `Result with roll No ${rollNumber} saved successfully`,
				});
				// Reset the form fields
				setStudentName("");
				setRollNumber("");
				setCourse("");
				setSubjects([{ name: "", score: "" }]);
				nameInputRef.current?.focus();
			} else {
				throw new Error(response.data.message);

				// Handle the error appropriately (e.g., show an error message to the user)
			}
		} catch (error: any) {
			setIsLoading(false);
			let errorMessage;
			if (error.response) {
				// Server responded with an error status code (e.g., 404, 500)
				errorMessage = `Server Error: ${error.response.status}`;
			} else if (error.request) {
				// Request was made but no response received
				errorMessage = "No response from server";
			} else {
				// Something else happened while setting up the request
				errorMessage = `${error.message}`;
			}
			setError(errorMessage);
			toast({
				title: "Result Saved Failed",
				description: errorMessage,
			});
		}
	};

	return (
		<div>
			<form
				// onSubmit={handleSubmit}
				className="max-w-md mx-auto bg-muted text-muted-foreground shadow-md rounded px-8 pt-6 pb-8 mb-4"
			>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="studentName">
						Student Name
					</label>
					<Input
						className="bg-background text-foreground"
						id="studentName"
						type="text"
						placeholder="Enter student name"
						value={studentName}
						onChange={(e) => setStudentName(e.target.value)}
						required
						ref={nameInputRef}
					/>
				</div>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="rollNumber">
						Roll Number
					</label>
					<Input
						className="bg-background text-foreground"
						id="rollNumber"
						type="text"
						placeholder="Enter roll number"
						value={rollNumber}
						onChange={(e) => setRollNumber(e.target.value)}
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="course">
						Course
					</label>
					<Input
						className="bg-background text-foreground"
						id="course"
						type="text"
						placeholder="Enter course name"
						value={course}
						onChange={(e) => setCourse(e.target.value)}
						required
					/>
				</div>
				<div className="mb-6">
					<label className="block font-bold mb-2" htmlFor="subjects">
						Subjects
					</label>
					{subjects.map((subject, index) => (
						<div
							key={index}
							className="flex mb-2 items-center justify-between gap-2"
						>
							<Input
								className="bg-background text-foreground"
								type="text"
								name="name"
								placeholder="Subject name"
								value={subject.name}
								onChange={(e) => handleSubjectChange(index, e)}
							/>
							<Input
								className="bg-background text-foreground"
								type="number"
								name="score"
								placeholder="Score"
								value={subject.score}
								onChange={(e) => handleSubjectChange(index, e)}
							/>
							<Button
								type="button"
								variant={"destructive"}
								onClick={() => handleRemoveSubject(index)}
							>
								<FaTrashAlt />
							</Button>
							<Button
								type="button"
								variant={"outline"}
								onClick={() => handleDuplicateSubject(index)}
							>
								<HiDuplicate />
							</Button>
						</div>
					))}
				</div>
				{/* <div className="flex items-center justify-between">
					
				</div> */}
				<div>
					<AlertDialog>
						<p className="flex items-center justify-between">
							<Button onClick={handleAddSubject}>Add Subject</Button>
							<AlertDialogTrigger>
								<Button type="button">Add Result</Button>
							</AlertDialogTrigger>
						</p>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
								<AlertDialogDescription>
									<p className=" p-4 rounded shadow">
										<p className="flex items-center justify-between mb-4">
											<p className="font-semibold text-lg">
												{studentName} ({rollNumber})
											</p>
											<p className="text-gray-600">{course}</p>
										</p>

										<p>
											{subjects.map((sub, idx) => (
												<p
													key={idx}
													className="flex items-center justify-between mb-2"
												>
													<span className="font-medium">{sub.name}</span>
													<span className="font-semibold">
														Score: {sub.score}
													</span>
												</p>
											))}
										</p>
									</p>
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>

								<AlertDialogAction onClick={handleSubmit}>
									{isLoading ? "Loading..." : "Continue"}
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</form>
		</div>
	);
};

export default AddStudentResult;
