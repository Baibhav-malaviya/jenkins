import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import axios from "axios";

const HeroSection = () => {
	const [email, setEmail] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const response = await axios.post("/api/email", { email });
			setIsLoading(false);
			console.log("Email submission response: ", response.data);

			if (response.data.success) {
				setShowModal(true);
				// Reset email field after successful submission
				setEmail("");
				// You might want to show a success message to the user here
			} else {
				// Handle unsuccessful submission
				console.error("Email submission failed:", response.data.message);
				// You might want to show an error message to the user here
			}
		} catch (error) {
			console.error("Error submitting email:", error);
			setIsLoading(false);
			// You might want to show an error message to the user here
		}
	};

	return (
		<div className="relative h-screen bg-background">
			<Image
				src={"/hero-image.avif"}
				alt="Hero Image"
				layout="fill"
				objectFit="cover"
				quality={100}
				className="absolute inset-0 z-0"
			/>
			<div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
				<div className="max-w-3xl mx-auto text-center text-white px-4">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
						Unlock Your Potential with Our Coaching Institute
					</h1>
					<p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
						Achieve your dream score and open doors to your future. Our expert
						instructors will guide you every step of the way.
					</p>
					<form
						onSubmit={handleEmailSubmit}
						className="flex flex-col sm:flex-row justify-center mb-4 sm:mb-8"
					>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Enter your email"
							className="px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 w-full sm:w-auto focus:outline-none text-foreground"
						/>
						<Button
							type="submit"
							className={`${
								isLoading ? "cursor-not-allowed opacity: 90" : "cursor-pointer"
							}`}
							disabled={isLoading}
						>
							Get Started
						</Button>
					</form>
					{showModal && (
						<div className="fixed text-foreground inset-0 z-50 flex items-center justify-center">
							<div className="bg-background p-6 md:p-8 rounded-md max-w-md mx-4">
								<h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
									Thank You!
								</h2>
								<p className="text-sm md:text-base mb-4 md:mb-6">
									We&apos;ll get in touch with you shortly to provide more
									information about our institution.
								</p>
								<Button onClick={() => setShowModal(false)}>Close</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
