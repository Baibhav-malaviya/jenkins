"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const response = await axios.post("/api/contact", formData);
			setIsLoading(false);
			if (response.data.success) {
				setIsSubmitted(true);
				// Reset form data after successful submission
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: "",
				});
				// You might want to show a success message to the user here
			} else {
				// Handle unsuccessful submission
				console.error("Form submission failed:", response.data.message);
				// You might want to show an error message to the user here
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setIsLoading(false);
			// You might want to show an error message to the user here
		}
	};

	return (
		<div className="max-w-4xl mx-auto px-4">
			{isSubmitted ? (
				<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
					<p>
						⭐ Thank you ⭐ for your message! We will get back to you shortly.
					</p>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					<div>
						<label htmlFor="name" className="block font-medium mb-2">
							Name
						</label>
						<Input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block font-medium mb-2">
							Email
						</label>
						<Input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full"
						/>
					</div>
					<div>
						<label htmlFor="phone" className="block font-medium mb-2">
							Phone
						</label>
						<Input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
							className="w-full"
						/>
					</div>
					<div className="md:col-span-2">
						<label htmlFor="message" className="block font-medium mb-2">
							Message
						</label>
						<Textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={4}
							className="w-full"
						/>
					</div>
					<div
						className={`md:col-span-2 text-center ${
							isLoading ? "cursor-not-allowed opacity: 90" : "cursor-pointer"
						}`}
					>
						<Button type="submit" disabled={isLoading}>
							{isLoading ? "Submitting..." : "Submit"}
						</Button>
					</div>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
