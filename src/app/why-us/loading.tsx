import React from "react";
import WhyUsCardSkelton from "@/components/skelton/WhyUsCardSkelton";

function Loading() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 sm:px-10">
			<WhyUsCardSkelton />
			<WhyUsCardSkelton />
			<WhyUsCardSkelton />
			<WhyUsCardSkelton />
			<WhyUsCardSkelton />
		</div>
	);
}

export default Loading;
