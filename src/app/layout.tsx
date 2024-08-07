import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "picklife-institute",
// 	description: "Generated by create next app",
// };

export const metadata: Metadata = {
	title: "PickLife Institute - Comprehensive Tech & Career Training",
	description:
		"PickLife Institute offers a wide range of courses in programming, web development, design, business, and career development. From C and Java to Photoshop and interview preparation, we provide the skills you need to succeed in the digital age.",
	keywords:
		"programming, web development, design, business, career development, C, Java, Python, PHP, HTML, WordPress, .NET, Office Automation, Photoshop, Tally, competitive exams, interview preparation, languages, IT certifications",
	openGraph: {
		title: "PickLife Institute - Empowering Careers Through Education",
		description:
			"Discover our diverse course offerings in tech, business, and professional development. Start your journey to success with PickLife Institute.",
		images: [
			{
				url: "https://res.cloudinary.com/baibhavmalaviya/image/upload/v1719124893/pick-life/c-background_uzejwh.jpg",
				width: 1200,
				height: 630,
				alt: "PickLife Institute Courses",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "PickLife Institute - Comprehensive Tech & Career Training",
		description:
			"Explore our wide range of courses in programming, design, business, and more. Elevate your skills with PickLife Institute.",
		images: [
			"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1719124893/pick-life/c-background_uzejwh.jpg",
		],
	},
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/pick-life-logo-16x16.png", sizes: "16x16" },
			{ url: "/pick-life-logo-32x32.png", sizes: "32x32" },
			{ url: "/pick-life-logo.png", sizes: "64x64" },
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<body className={inter.className}>
					<Navbar />
					<main className="p-2 mt-20">{children}</main>
					<Toaster />
					<Footer />
				</body>
			</ThemeProvider>
		</html>
	);
}
