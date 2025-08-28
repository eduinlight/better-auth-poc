import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { ProtectedRoute } from "../../components/protected-route";

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
