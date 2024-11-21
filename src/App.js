import React from "react";
import "./App.scss";
import ThemeProvider from "./contexts/Theme/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";

export default function App() {	
	return (
		<Router>
			<ThemeProvider>
				<PageRoutes />
			</ThemeProvider>
		</Router>
	);
}
