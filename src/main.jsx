import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import UserContextProvider from "./context/userContextProvider.js"
import CountContextProvider from "./context/CountContextProvider.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
<UserContextProvider>
			<CountContextProvider>
				<App />
			</CountContextProvider>
		</UserContextProvider>	</StrictMode>
)
