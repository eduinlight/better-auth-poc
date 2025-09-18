import type React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";
import { useAuthenticate } from "@daveyplate/better-auth-ui";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const {isPending} = useAuthenticate()

  console.log({isPending})

	if (isPending) {
		return (
			<div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-4 border-white/30 border-t-white mx-auto mb-4"></div>
					<p className="text-white text-lg font-medium">Loading...</p>
				</div>
			</div>
		);
	}

	return <>{children}</>;
};
