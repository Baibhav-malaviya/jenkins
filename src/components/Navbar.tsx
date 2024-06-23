"use client";
import Link from "next/link";
import { useState } from "react";

import { Button } from "./ui/button";
import {
	FaRegLightbulb,
	FaBookOpen,
	FaInfoCircle,
	FaPhoneAlt,
} from "react-icons/fa";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ModeToggler";
import Logo from "./Logo";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-background text-foreground fixed top-0 left-0 z-50 right-0">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Logo />
					</div>
					{/* Desktop responsive */}
					<div className="hidden sm:block">
						<div className="flex items-baseline space-x-4">
							<Link
								href="/why-us"
								className="hover:bg-muted px-3 py-2 rounded-md text-sm font-medium"
							>
								<FaRegLightbulb className="inline-block mr-1" /> Why Us
							</Link>
							<Link
								href="/courses"
								className="hover:bg-muted px-3 py-2 rounded-md text-sm font-medium"
							>
								<FaBookOpen className="inline-block mr-1" /> Courses
							</Link>
							<Link
								href="/about"
								className="hover:bg-muted px-3 py-2 rounded-md text-sm font-medium"
							>
								<FaInfoCircle className="inline-block mr-1" /> About
							</Link>
							<Link
								href="/contact"
								className="hover:bg-muted px-3 py-2 rounded-md text-sm font-medium"
							>
								<FaPhoneAlt className="inline-block mr-1" /> Contact Us
							</Link>
							<Link href="/result">
								<Button>Your Result</Button>
							</Link>
							<ModeToggle />
						</div>
					</div>
					{/* Toggle button */}
					<div className="-mr-2 flex sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="bg-background inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-muted-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-foreground"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{/* Mobile responsive */}
			<div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<Link
						href="/why-us"
						className="hover:bg-muted text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium"
					>
						<FaRegLightbulb className="inline-block mr-1" /> Why Us
					</Link>
					<Link
						href="/courses"
						className="hover:bg-muted text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium"
					>
						<FaBookOpen className="inline-block mr-1" /> Courses
					</Link>
					<Link
						href="/about"
						className="hover:bg-muted text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium"
					>
						<FaInfoCircle className="inline-block mr-1" /> About
					</Link>
					<Link
						href="/contact"
						className="hover:bg-muted text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium"
					>
						<FaPhoneAlt className="inline-block mr-1" /> Contact Us
					</Link>
					<Link href="/result" className="block">
						<Button>Your Result</Button>
					</Link>
					<ModeToggle />
				</div>
			</div>
			<Separator />
		</nav>
	);
};

export default Navbar;
