/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hTSJwKPnBuV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";

export default function Component() {
	return (
		<div className="flex justify-center h-screen">
			<Card className="min-w-md w-full bg-gray-100 dark:bg-gray-800 animate-pulse">
				<CardHeader className="flex items-center gap-4 p-4">
					<div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-md mr-auto" />
					<div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
				</CardHeader>
				<CardContent className="p-4">
					<div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2" />
					<div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
				</CardContent>
				<CardFooter className="flex justify-end p-4">
					<div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
				</CardFooter>
			</Card>
		</div>
	);
}
