import type React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@package/ui/components/ui/card";
import { LoginForm } from "./login-form";

export const Login: React.FC = () => {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
			<Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
				<CardHeader>
					<CardTitle className="text-center text-3xl font-bold text-gray-800">
						Welcome Back 👋
					</CardTitle>
				</CardHeader>

				<CardContent className="space-y-5">
					<LoginForm />

					<p className="text-center text-sm text-muted-foreground">
						Don't have an account?{" "}
						<Link
							to="/auth/signup"
							className="font-medium text-primary hover:underline"
						>
							Sign up
						</Link>
					</p>
				</CardContent>
			</Card>
		</div>
	);
};
