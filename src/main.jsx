import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyules } from "./GloblalStyles";
import router from "./routes";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GlobalStyules />
		<RouterProvider router={router} />
	</StrictMode>,
);
