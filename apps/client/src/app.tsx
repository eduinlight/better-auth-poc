import { Toaster } from "@package/ui/components/ui/sonner";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import { MainRoutes } from "./routes";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Toaster richColors />
				<MainRoutes />
			</AuthProvider>
		</Router>
	);
}

export default App;
