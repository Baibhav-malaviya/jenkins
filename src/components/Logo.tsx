import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	size?: "sm" | "md";
	className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
	const dimensions = {
		sm: { width: 100, height: 32 },
		md: { width: 150, height: 40 },
	};

	const { width, height } = dimensions[size];

	return (
		<Link href="/" className={`inline-block ${className}`}>
			<div className="flex flex-col items-center">
				<div style={{ width, height }} className="relative">
					<Image
						src="/pick-life-logo.png"
						alt="Company Logo"
						fill
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<p className={`text-center text-xs font-semibold`}>
					Come to us, Feel the difference
				</p>
			</div>
		</Link>
	);
};

export default Logo;
