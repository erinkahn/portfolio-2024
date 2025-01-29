import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

// import { getLCP, getFCP, getFID, getCLS, getTTFB } from "web-vitals";

// getCLS(console.log);
// getFCP(console.log);
// getFID(console.log);
// getLCP(console.log);
// getTTFB(console.log);

// if (process.env.NODE_ENV !== "production") {
// 	const axe = require("@axe-core/react");
// 	axe(React, ReactDOM, 1000);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</HelmetProvider>
	</StrictMode>
);
