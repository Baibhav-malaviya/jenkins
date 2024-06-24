import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimationWrapper = ({ children, index }: any) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.95, y: 10 }}
			animate={
				isInView
					? { opacity: 1, scale: 1, y: 0 }
					: { opacity: 0, scale: 0.95, y: 10 }
			}
			transition={{ duration: 0.8, delay: index * 0.05 }}
			className="w-full h-auto"
		>
			{children}
		</motion.div>
	);
};

export default AnimationWrapper;
