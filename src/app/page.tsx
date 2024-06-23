"use client";
import HeroSection from "@/components/HeroSection";
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

export default function Home() {
	return (
		<section>
			<HeroSection />
			<div>
				<h2 className="text-center font-bold text-2xl md:text-3xl my-8 text-orange-500">
					Champions of Success, Our Star Achievers
				</h2>
			</div>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
				className="my-5"
			/>
		</section>
	);
}
