import "./wdyr";
import React, {StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
// import {getLCP, getFCP, getFID, getCLS, getTTFB} from 'web-vitals';

// getCLS(console.log);
// getFCP(console.log);
// getFID(console.log);
// getLCP(console.log);
// getTTFB(console.log);

// if (process.env.NODE_ENV !== "production") {
// 	const axe = require("@axe-core/react");
// 	axe(React, ReactDOM, 1000);
// }

ReactDOM.render(
	<StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</StrictMode>,
	document.getElementById("root")
);
