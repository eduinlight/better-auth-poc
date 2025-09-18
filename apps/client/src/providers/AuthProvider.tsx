import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { authClient } from "@package/auth-client";
import type { FC, PropsWithChildren } from "react";
import { NavLink, NavLinkProps, useNavigate } from "react-router-dom";


function RouterLink({ href, children, ...props }: { href: string; children: React.ReactNode }) {
  return (
    <NavLink to={href} {...props}>
      {children}
    </NavLink>
  )
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();
  console.log({navigate})
	return (
		<AuthUIProvider authClient={authClient} navigate={navigate} Link={RouterLink}>
			{children}
		</AuthUIProvider>
	);
};
