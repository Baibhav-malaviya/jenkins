import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const AboutLoading = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className="container mx-auto px-4 py-8"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* Header */}
			<motion.div className="mb-8" variants={itemVariants}>
				<Skeleton className="h-12 w-3/4 mx-auto mb-4" />
				<Skeleton className="h-4 w-1/2 mx-auto" />
			</motion.div>

			{/* Main content */}
			<motion.div className="space-y-6" variants={itemVariants}>
				{/* Paragraph skeletons */}
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-3/4" />

				{/* Image placeholder */}
				<Skeleton className="h-64 w-full" />

				{/* More paragraph skeletons */}
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-2/3" />
			</motion.div>

			{/* Team section */}
			<motion.div className="mt-12" variants={itemVariants}>
				<Skeleton className="h-8 w-1/3 mx-auto mb-6" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[1, 2, 3].map((i) => (
						<motion.div
							key={i}
							className="flex flex-col items-center"
							variants={itemVariants}
						>
							<Skeleton className="h-32 w-32 rounded-full" />
							<Skeleton className="h-4 w-24 mt-4" />
							<Skeleton className="h-3 w-20 mt-2" />
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default AboutLoading;
