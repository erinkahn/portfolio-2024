import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</HelmetProvider>
	</StrictMode>
);
