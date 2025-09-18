import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./app";
import AuthPage from "./auth/route";

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/auth/:pathname" element={<AuthPage />} />
			<Route path="/*" element={<AppRoutes />} />
		</Routes>
	);
};
