import { IoConstructSharp } from "react-icons/io5";

const UnderDevelopment = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-96 px-4 md:px-8 lg:px-16 xl:px-20">
			<IoConstructSharp className="text-5xl md:text-6xl lg:text-7xl text-gray-500 mb-4" />
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 text-center">
				Under Development
			</h1>
			<p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center">
				This page is under construction. Please check back later.
			</p>
		</div>
	);
};

export default UnderDevelopment;
