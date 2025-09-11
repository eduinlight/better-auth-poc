import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../../components/protected-route";
import { Dashboard } from "./dashboard";

export const AppRoutes = () => {
	return (
		<ProtectedRoute>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/dashboard" element={<Navigate to="/" replace />} />
			</Routes>
		</ProtectedRoute>
	);
};
