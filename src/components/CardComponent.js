import React from "react";

const CardComponent = ({ text, generatedText, copyText }) => {
	return (
		<div
			className="max-w-sm rounded overflow-hidden shadow-lg  "
			style={{ width: "250px" }}
		>
			<div className="px-6 py-4 dark:bg-slate-800">
				<div className="flex items-center justify-between mb-2">
					<div className="text-md ">Generated Text</div>
					<button
						onClick={() => copyText()}
						className="text-gray-500 hover:text-gray-700 ml-14 "
					>
						<ion-icon name="copy-outline"></ion-icon>
					</button>
				</div>
				<div className="text-sm text-center pt-3">{generatedText()}</div>
			</div>
		</div>
	);
};

export default CardComponent;
