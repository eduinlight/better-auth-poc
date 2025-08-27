import { authClient } from "@package/auth-client";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
	id: string;
	email: string;
	name: string;
}

interface AuthContextType {
	user: User | null;
	isLoading: boolean;
	login: (email: string, password: string) => Promise<void>;
	signup: (email: string, password: string, name: string) => Promise<void>;
	logout: () => Promise<void>;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const session = await authClient.getSession();
				if (session.data?.user) {
					setUser(session.data.user as User);
				}
			} catch (error) {
				console.error("Auth check failed:", error);
			} finally {
				setIsLoading(false);
			}
		};

		checkAuth();
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const result = await authClient.signIn.email({
				email,
				password,
			});
			if (result.data?.user) {
				setUser(result.data.user as User);
			}
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		}
	};

	const signup = async (email: string, password: string, name: string) => {
		try {
			const result = await authClient.signUp.email({
				email,
				password,
				name,
			});
			if (result.data?.user) {
				setUser(result.data.user as User);
			}
		} catch (error) {
			console.error("Signup failed:", error);
			throw error;
		}
	};

	const logout = async () => {
		try {
			await authClient.signOut();
			setUser(null);
		} catch (error) {
			console.error("Logout failed:", error);
			throw error;
		}
	};

	const value = {
		user,
		isLoading,
		login,
		signup,
		logout,
		isAuthenticated: !!user,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
