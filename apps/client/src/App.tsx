import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

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
