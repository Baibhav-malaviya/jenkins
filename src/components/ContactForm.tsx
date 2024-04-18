"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle form submission logic here
		setIsSubmitted(true);
		// Reset form data after successful submission
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	return (
		<div className="max-w-4xl mx-auto">
			{isSubmitted ? (
				<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
					<p>Thank you for your message! We will get back to you shortly.</p>
				</div>
			) : null}
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
						required
						className="w-full"
					/>
				</div>
				<div className="md:col-span-2 text-center">
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
