"use client";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials2 = [
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

const testimonials = [
	{
		quote:
			"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote:
			"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
		name: "William Shakespeare",
		title: "Hamlet",
	},
	{
		quote: "All that we see or seem is but a dream within a dream.",
		name: "Edgar Allan Poe",
		title: "A Dream Within a Dream",
	},
	{
		quote:
			"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
		name: "Jane Austen",
		title: "Pride and Prejudice",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
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
				items={testimonials2}
				direction="right"
				speed="slow"
				className="my-5"
			/>
			{/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"></div> */}
		</section>
	);
}
