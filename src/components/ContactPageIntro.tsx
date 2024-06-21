import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ContactPageIntro = () => {
	return (
		<div className="max-w-4xl mx-auto text-center mb-16 px-4">
			<div className="bg-muted text-muted-foreground rounded-lg p-6 md:p-8">
				<h1 className="text-2xl md:text-4xl font-bold mb-4">Get in Touch</h1>
				<p className="text-base md:text-lg mb-6">
					Have questions about our IELTS coaching programs? Need more
					information or assistance? We&apos;re here to help! Our friendly and
					knowledgeable team is just a message away.
				</p>
				<div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
					<a
						href="mailto:info@coachingcenter.com"
						className="flex items-center text-foreground hover:text-green-500 transition-colors"
					>
						<FaEnvelope className="mr-2" />
						<span className="text-sm md:text-base">
							picklifeonline@gmail.com
						</span>
					</a>
					<a
						href="tel:+918280905909"
						className="flex items-center text-foreground hover:text-green-500 transition-colors"
					>
						<FaPhoneAlt className="mr-2" />
						<span className="text-sm md:text-base">8280905909</span>
					</a>
				</div>
				{/* <Button size="lg" variant="default" className="w-full md:w-auto"> */}
				{/* //!todo make it working */}
				{/* Contact Us */}
				{/* </Button> */}
			</div>
		</div>
	);
};

export default ContactPageIntro;
