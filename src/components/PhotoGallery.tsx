import Image from "next/image";
import { motion } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";

const PhotoGallery = ({ images }: any) => {
	// Assuming you have an array of image paths
	return (
		<section className="py-16 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{images.map((src: string, index: number) => (
						<AnimationWrapper key={index} index={index}>
							<div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
								<Image
									src={src}
									alt={`Coaching image ${index + 1}`}
									layout="fill"
									objectFit="cover"
									className="transition-transform duration-300 hover:scale-110"
								/>
							</div>
						</AnimationWrapper>
					))}
				</div>
			</div>
		</section>
	);
};

export default PhotoGallery;
