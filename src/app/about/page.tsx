"use client";
import PhotoGallery from "../../components/PhotoGallery";
import UnderDevelopment from "@/components/UnderDevelopment";
import Image from "next/image";
import React from "react";

const images = [
	"/glimps-image/IMG-20240622-WA0021.jpg",
	"/glimps-image/IMG-20240622-WA0025.jpg",
	"/glimps-image/IMG-20240622-WA0029.jpg",
	"/glimps-image/IMG-20240622-WA0030.jpg",
	"/glimps-image/IMG-20240622-WA0031.jpg",
	"/glimps-image/IMG-20240622-WA0032.jpg",
	"/glimps-image/IMG-20240622-WA0034.jpg",
	"/glimps-image/IMG-20240622-WA0044.jpg",
	"/glimps-image/IMG-20240622-WA0050.jpg",
	"/glimps-image/IMG-20240622-WA0055.jpg",
	"/glimps-image/IMG-20240622-WA0058.jpg",
	"/glimps-image/IMG-20240622-WA0061.jpg",
	"/glimps-image/IMG-20240622-WA0063.jpg",
	"/glimps-image/IMG-20240622-WA0065.jpg",
	// Add more image paths as needed
];

export default function About() {
	return (
		<div>
			<div>
				<header className="text-center my-8">
					<h1 className="text-4xl font-bold text-foreground mb-3">
						Moments of Transformation
					</h1>
					<p className="text-lg max-w-xl mx-auto">
						Explore our gallery of success stories, dynamic learning sessions,
						and the moments that define our coaching journey.
					</p>
				</header>
				<PhotoGallery images={images} />
			</div>
		</div>
	);
}
