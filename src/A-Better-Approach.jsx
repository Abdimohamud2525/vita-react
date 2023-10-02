const ThemeContext = createContext();

function AbetterApproach() {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Navbar />
		</ThemeContext.Provider>
	);
}

function Navbar() {
	return (
		<div>
			{/* <Logo /> */}
			<Menu />
		</div>
	);
}

function Menu() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<ul>
			<li>Home</li>
			<li onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme (Currently: {theme})
			</li>
		</ul>
	);
}

export default AbetterApproach;