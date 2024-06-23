import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const TechCard = ({
	backgroundImage = "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1719125831/pick-life/html-background_nga0uq.jpg",
	logoImage = "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1719125765/pick-life/html-logo.png",
	title = "logo",
	id = 1,
}) => {
	return (
		<Link href={`/courses/${id}`} className="w-full h-full">
			<Card className="w-full xs:w-64 overflow-hidden bg-muted transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:cursor-pointer">
				<div className="relative h-40 group">
					{/* Background image */}
					<Image
						src={backgroundImage}
						alt={`${title} background`}
						layout="fill"
						objectFit="cover"
						className="z-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
					/>
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-30">
						{/* Logo image */}
						<div className="relative w-16 h-16 rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-20 group-hover:h-20">
							<Image
								src={logoImage}
								alt={`${title} logo`}
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 ease-in-out group-hover:scale-110"
							/>
						</div>
					</div>
				</div>
				<CardContent className="p-4 transition-colors duration-300 ease-in-out">
					<h3 className="text-xl font-semibold text-center transition-colors duration-300 ease-in-out group-hover:text-blue-600">
						{title}
					</h3>
				</CardContent>
			</Card>
		</Link>
	);
};

export default TechCard;
