import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-muted text-muted-foreground py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo and Copyright */}
					<div>
						<Link href="/" className="text-xl font-bold text-primary">
							Logo
						</Link>
						<p className="mt-2">
							&copy; {new Date().getFullYear()} Coaching Center. All rights
							reserved.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-bold mb-4">Quick Links</h3>
						<nav>
							<ul className="space-y-2">
								<li>
									<Link href="/why-us">Why Us</Link>
								</li>
								<li>
									<Link href="/courses">Courses</Link>
								</li>
								<li>
									<Link href="/about">About</Link>
								</li>
								<li>
									<Link href="/contact">Contact Us</Link>
								</li>
							</ul>
						</nav>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className="font-bold mb-4">Contact Us</h3>
						<p>
							Picklife institute, Near police station, Above HDFC bank, Joga
						</p>
						<p>Mansa, Punjab</p>
						<p>Email: picklifeonline@gmail.com</p>
						<p>Phone: 8280905909</p>
					</div>

					{/* Social Media Links */}
					<div>
						<h3 className="font-bold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a
								href="https://www.facebook.com/PickLifeImmigration"
								target="blank"
								className=" hover:text-primary transition-colors duration-300"
							>
								<FaFacebook className="text-2xl" />
							</a>
							<a
								href="https://www.instagram.com/picklife_immigration?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
								target="blank"
								className=" hover:text-primary transition-colors duration-300"
							>
								<FaInstagram className="text-2xl" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
