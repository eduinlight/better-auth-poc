import type React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { login, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	if (isAuthenticated) {
		return <Navigate to="/" replace />;
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			await login(email, password);
			navigate("/");
		} catch (err) {
			setError("Invalid email or password");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
			<div className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
				<h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
					Welcome Back 👋
				</h2>

				{error && (
					<div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Email Address
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-2 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
							placeholder="you@example.com"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-2 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
							placeholder="••••••••"
							required
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full rounded-xl bg-purple-600 p-3 text-lg font-semibold text-white shadow-md transition hover:bg-purple-700 disabled:opacity-50"
					>
						{isLoading ? "Signing in..." : "Sign In"}
					</button>
				</form>

				<p className="mt-6 text-center text-sm text-gray-600">
					Don't have an account?{" "}
					<Link
						to="/auth/signup"
						className="font-medium text-purple-600 hover:text-purple-800"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};
