import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pick Life Immigration",
	description: "Generated by create next app",
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
