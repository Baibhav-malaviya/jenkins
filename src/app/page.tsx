"use client";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
	{
		url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217024/testimonial_1_vlpziw.jpg",
	},
	{
		url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217130/testimonial_4_zanby3.jpg",
	},
	{
		url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217066/testimonial_2_ripbet.jpg",
	},
	{
		url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217095/testimonial_3_c0teb4.jpg",
	},

	{
		url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217160/testimonial_5_g6rej2.jpg",
	},
	{
		url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1716217197/testimonial_6_pv5tyl.jpg",
	},
];

const images = [
	"/glimps-image/IMG-20240622-WA0021.jpg",
	"/glimps-image/IMG-20240622-WA0025.jpg",
	"/glimps-image/IMG-20240622-WA0029.jpg",
	"/glimps-image/IMG-20240622-WA0030.jpg",
	"/glimps-image/IMG-20240622-WA0031.jpg",
	"/glimps-image/IMG-20240622-WA0032.jpg",
	"/glimps-image/IMG-20240622-WA0034.jpg",
	"/glimps-image/IMG-20240622-WA0044.jpg",

	// Add more image paths as needed
];

export default function Home() {
	return (
		<section>
			<HeroSection />
			<div>
				<header className="text-center my-8">
					<h1 className="text-4xl font-bold text-foreground mb-3">
						Our Coaching Environment
					</h1>
					<p className="text-lg max-w-xl mx-auto">
						Take a glimpse into our vibrant learning spaces and see how we
						foster success.
					</p>
				</header>
				<PhotoGallery images={images} />
			</div>
		</section>
	);
}
