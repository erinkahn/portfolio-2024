import React, {useEffect} from "react";
import "./App.scss";
import ThemeProvider from "./contexts/Theme/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";

export default function App() {
	useEffect(() => {
		if (window.location.hostname === 'www.erin-kahn.com') {
		  window.location.replace('https://erin-kahn.com' + window.location.pathname + window.location.search);
		}
	}, []);
	
	return (
		<Router>
			<ThemeProvider>
				<PageRoutes />
			</ThemeProvider>
		</Router>
	);
}
