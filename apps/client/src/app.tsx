import { Toaster } from "@package/ui/components/ui/sonner";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./providers/AuthContext";
import { MainRoutes } from "./routes";

function App() {
	return (
		<>
			<Toaster richColors />
			<AuthProvider>
				<Router>
					<MainRoutes />
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
