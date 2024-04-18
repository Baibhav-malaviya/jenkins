import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
	const [email, setEmail] = useState("");
	const [showModal, setShowModal] = useState(false);

	const handleEmailSubmit = (e: any) => {
		e.preventDefault();
		//todo Handle email submission logic here
		setShowModal(true);
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
						Unlock Your Potential with Our IELTS Coaching
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
						<Button type="submit">Get Started</Button>
					</form>
					{showModal && (
						<div className="fixed text-foreground inset-0 z-50 flex items-center justify-center">
							<div className="bg-background p-6 md:p-8 rounded-md max-w-md mx-4">
								<h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
									Thank You!
								</h2>
								<p className="text-sm md:text-base mb-4 md:mb-6">
									We&apos;ll get in touch with you shortly to provide more
									information about our IELTS coaching programs.
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
