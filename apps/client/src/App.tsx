import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { Login } from "./components/login";
import { ProtectedRoute } from "./components/protected-route";
import { Signup } from "./components/signup";
import { AuthProvider } from "./providers/AuthContext";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/signup" element={<Signup />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path="*"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
