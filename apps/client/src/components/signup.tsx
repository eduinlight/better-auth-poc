import type React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";
import { Button } from "@package/ui/components/ui/button";
import { Input } from "@package/ui/components/ui/input";
import { Label } from "@package/ui/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@package/ui/components/ui/card";
import { Alert, AlertDescription } from "@package/ui/components/ui/alert";

export const Signup: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { signup, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	if (isAuthenticated) {
		return <Navigate to="/" replace />;
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (password.length < 6) {
			setError("Password must be at least 6 characters long");
			return;
		}

		setIsLoading(true);

		try {
			await signup(email, password, name);
			navigate("/");
		} catch (err) {
			setError("Failed to create account. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
			<Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
				<CardHeader>
					<CardTitle className="text-center text-3xl font-bold text-gray-800">
						Create Account ✨
					</CardTitle>
				</CardHeader>
				
				<CardContent className="space-y-4">
					{error && (
						<Alert variant="destructive">
							<AlertDescription>
								{error}
							</AlertDescription>
						</Alert>
					)}

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<Input
								id="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Your full name"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email Address</Label>
							<Input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="you@example.com"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="••••••••"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="confirmPassword">Confirm Password</Label>
							<Input
								id="confirmPassword"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								placeholder="••••••••"
								required
							/>
						</div>

						<Button
							type="submit"
							disabled={isLoading}
							className="w-full"
							size="lg"
						>
							{isLoading ? "Creating Account..." : "Create Account"}
						</Button>
					</form>

					<p className="text-center text-sm text-muted-foreground">
						Already have an account?{" "}
						<Link
							to="/auth/login"
							className="font-medium text-primary hover:underline"
						>
							Sign in
						</Link>
					</p>
				</CardContent>
			</Card>
		</div>
	);
};
