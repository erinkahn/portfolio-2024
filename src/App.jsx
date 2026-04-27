import React from "react";
import "./App.scss";
import ThemeProvider from "./contexts/Theme/ThemeContext";
import PageRoutes from "./routes/PageRoutes";

export default function App() {
	return (
		<ThemeProvider>
			<PageRoutes />
		</ThemeProvider>
	);
}
