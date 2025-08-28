import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./app";
import { PublicRoutes } from "./public";

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/auth/*" element={<PublicRoutes />} />
			<Route path="/*" element={<AppRoutes />} />
		</Routes>
	);
};
