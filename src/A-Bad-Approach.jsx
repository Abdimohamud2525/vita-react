import { useState } from "react";

function App2() {
	const [theme, setTheme] = useState("light");

	return <Navbar theme={theme} setTheme={setTheme} />;
}

function Navbar({ theme, setTheme }) {
	return (
		<div>
			{/* <Logo /> */}
			<Menu theme={theme} setTheme={setTheme} />
		</div>
	);
}

function Menu({ theme, setTheme }) {
	return (
		<ul>
			<li>Home</li>
			<li onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme (Currently: {theme})
			</li>
		</ul>
	);
}
export default App2;