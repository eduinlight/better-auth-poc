import { UnprotectedRoute } from "@app/client/src/components/unprotected-route";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./login";
import { Signup } from "./signup";

export const PublicRoutes = () => {
	return (
		<UnprotectedRoute>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<Navigate to="/login" replace />} />
			</Routes>
		</UnprotectedRoute>
	);
};
