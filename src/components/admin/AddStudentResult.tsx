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
	const [registrationNumber, setRegistrationNumber] = useState("");
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [studentAvatar, setStudentAvatar] = useState<File | null>(null);
	const [mothersName, setMothersName] = useState("");
	const [fathersName, setFathersName] = useState("");

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const { toast } = useToast();

	const nameInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(e.target.files?.[0] || null);
	};
	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStudentAvatar(e.target.files?.[0] || null);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			if (!studentName || !registrationNumber) return;
			formData.append("studentName", studentName);
			formData.append("registrationNumber", registrationNumber);
			formData.append("mothersName", mothersName);
			formData.append("fathersName", fathersName);

			if (!selectedFile) return;
			formData.append("resultPdf", selectedFile);

			if (!studentAvatar) return;
			formData.append("avatar", studentAvatar);

			setIsLoading(true);
			const response = await axios.post(
				"https://pick-life-backend.onrender.com/",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(response.data);

			setIsLoading(false);

			if (response.data.success) {
				console.log("Student result saved successfully:", response.data.data);
				toast({
					title: "Result Saved!",
					description: `Result with roll No ${registrationNumber} saved successfully`,
				});
				setStudentName("");
				setRegistrationNumber("");
				setStudentAvatar(null);
				setSelectedFile(null);
				setFathersName("");
				setMothersName("");
				nameInputRef.current?.focus();
			} else {
				throw new Error(response.data.message);
			}
		} catch (error: any) {
			setIsLoading(false);
			let errorMessage;
			if (error.response) {
				errorMessage = `Server Error: ${error.response.status}`;
			} else if (error.request) {
				errorMessage = "No response from server";
			} else {
				errorMessage = error.message;
			}
			setError(errorMessage);
			toast({
				title: "Result Save Failed",
				description: errorMessage,
			});
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
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
					<label className="block font-bold mb-2" htmlFor="motherName">
						Mother Name
					</label>
					<Input
						className="bg-background text-foreground"
						id="motherName"
						type="text"
						placeholder="Enter student name"
						value={mothersName}
						onChange={(e) => setMothersName(e.target.value)}
						required
						ref={nameInputRef}
					/>
				</div>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="fatherName">
						Father Name
					</label>
					<Input
						className="bg-background text-foreground"
						id="fatherName"
						type="text"
						placeholder="Enter student name"
						value={fathersName}
						onChange={(e) => setFathersName(e.target.value)}
						required
						ref={nameInputRef}
					/>
				</div>

				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="registrationNumber">
						Registration Number
					</label>
					<Input
						className="bg-background text-foreground"
						id="registrationNumber"
						type="text"
						placeholder="Enter roll number"
						value={registrationNumber}
						onChange={(e) => setRegistrationNumber(e.target.value)}
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="avatar">
						Upload Photo
					</label>
					<Input
						className="bg-background text-foreground"
						name="avatar"
						id="avatar"
						type="file"
						required
						onChange={handleAvatarChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="result">
						Upload Result
					</label>
					<Input
						className="bg-background text-foreground"
						name="resultPdf"
						id="result"
						type="file"
						required
						onChange={handleFileChange}
					/>
				</div>
				<Button
					type="submit"
					disabled={isLoading}
					className={`${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
				>
					{isLoading ? "Submitting..." : "Submit Result"}
				</Button>
			</form>
		</div>
	);
};

export default AddStudentResult;
