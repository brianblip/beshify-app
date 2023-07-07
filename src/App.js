import { useState, useEffect } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
	const [text, setText] = useState("");
	const [theme, setTheme] = useState("light");
	const element = document.documentElement;
	const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

	const generatedText = () => {
		const trimmedText = text.trim();
		if (trimmedText.length > 0) {
			const replaceValue = trimmedText.replace(/\s+/g, " ");
			const newValue = replaceValue.replace(/\s/g, "🤸");
			setText(newValue);
			return newValue;
		} else {
			setText(trimmedText);
		}
	};
	console.log(darkQuery, "darkQuery");
	const options = [
		{
			icon: "sunny",
			text: "light",
		},
		{
			icon: "moon",
			text: "dark",
		},
	];

	useEffect(() => {
		switch (theme) {
			case "dark":
				element.classList.add("dark");
				localStorage.setItem("theme", "dark");
				break;
			case "light":
				element.classList.remove("dark");
				localStorage.setItem("theme", "light");
				break;
			default:
				break;
		}
	});

	const copyText = () => {
		const textarea = document.createElement("textarea");
		textarea.value = text;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		toast.success("Text Copied", {
			position: toast.POSITION.BOTTOM_CENTER,
			autoClose: 2000,
			hideProgressBar: true,
		});
	};

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<section className="bg-gray-100 dark:text-gray-100 dark:bg-slate-900 duration-100 ">
					<div className="h-screen flex flex-col justify-center items-center">
						<p className="text-4xl font-bold font-merryWeather mb-4">
							🤸Beshify App🤸
						</p>
						<input
							type="text"
							id="name"
							placeholder="Enter text..."
							className="border-2 border-none rounded-sm p-1 mb-4 text-sm font-merryWeather bg-gray-100 dark:text-gray-100 dark:bg-slate-900 duration-100"
							onChange={(event) => setText(event.target.value)}
						/>
						{text.length > 0 && (
							<CardComponent
								text={text}
								generatedText={generatedText}
								copyText={copyText}
							/>
						)}
					</div>
					<div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
						{options?.map((opt) => (
							<button
								key={opt.text}
								onClick={() => setTheme(opt.text)}
								className={`w-7 h-7 leading-8 text-md rounded-full m-1  ${
									theme === opt.text && " text-sky-600"
								}`}
							>
								<ion-icon name={opt.icon}></ion-icon>
							</button>
						))}
					</div>
				</section>
				<footer className="bg-gray-100 dark:text-gray-100 dark:bg-slate-800 p-4 text-center fixed bottom-0 w-full">
					<div className="text-xl">Developed By: Brian Prado</div>
					<div className="flex justify-center mt-2">
						<a
							href="https://github.com/brianblip"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:text-gray-700 mr-4"
						>
							<FaGithub size={25} />
						</a>
						<a
							href="https://www.linkedin.com/in/john-brian-prado-584a13270/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:text-gray-700"
						>
							<FaLinkedin size={25} />
						</a>
					</div>
				</footer>
			</div>
			<ToastContainer />
		</>
	);
}

export default App;
