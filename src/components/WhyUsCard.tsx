import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import React from "react";

interface IObj {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const WhyUsCard = ({ title, description, icon }: IObj) => {
	return (
		<Card className="flex bg-muted flex-col items-center">
			<CardHeader className="flex flex-row items-start space-x-4 w-full  ">
				{icon}

				<CardTitle className="text-xl">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription className=" p-2 rounded-md text-foreground">
					{description}
				</CardDescription>
			</CardContent>
		</Card>
	);
};

export default WhyUsCard;
