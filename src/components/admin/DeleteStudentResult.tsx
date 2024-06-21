"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "../ui/use-toast";

export default function DeleteStudentResult() {
	const [rollNumber, setRollNumber] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState<{
		type: "success" | "error";
		text: string;
	} | null>(null);

	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage(null);

		try {
			const response = await axios.delete(
				`/api/deleteResult?rollNumber=${rollNumber}`
			);

			if (response.data.success) {
				toast({
					title: "Deleted!",
					description: response.data.message,
				});
				setMessage({
					type: "success",
					text: "Student result deleted successfully",
				});
				setRollNumber("");
			} else {
				setMessage({
					type: "error",
					text: response.data.message || "Failed to delete student result",
				});
			}
		} catch (error) {
			console.error("Error deleting student result:", error);
			if (axios.isAxiosError(error) && error.response) {
				setMessage({
					type: "error",
					text:
						error.response.data.message ||
						"An error occurred while deleting the result",
				});
			} else {
				setMessage({ type: "error", text: "An unexpected error occurred" });
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Card className="max-w-md mx-auto px-8 pt-6 pb-8 mb-4  rounded bg-muted">
			<CardHeader>
				<CardTitle>Delete Student Result</CardTitle>
			</CardHeader>
			<form onSubmit={handleSubmit}>
				<CardContent>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Input
								id="rollNumber"
								placeholder="Enter Roll Number"
								className="bg-background text-foreground"
								value={rollNumber}
								onChange={(e) => setRollNumber(e.target.value)}
								disabled={isLoading}
							/>
						</div>
					</div>

					{message?.type === "error" && (
						<AlertDescription className="mt-4 bg-red-200 p-2 rounded font-semibold italic">
							{message.text}
						</AlertDescription>
					)}
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button
						variant="destructive"
						type="submit"
						disabled={isLoading || !rollNumber}
					>
						{isLoading ? "Deleting..." : "Delete"}
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
