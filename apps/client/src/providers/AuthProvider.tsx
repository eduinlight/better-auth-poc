import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { authClient } from "@package/auth-client";
import type { FC, PropsWithChildren } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();
	return (
		<AuthUIProvider authClient={authClient} navigate={navigate} Link={NavLink}>
			{children}
		</AuthUIProvider>
	);
};
