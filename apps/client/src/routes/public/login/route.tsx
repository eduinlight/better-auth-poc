import type React from "react";
import { Link } from "react-router-dom";
import { Button } from "@package/ui/components/ui/button";
import { Input } from "@package/ui/components/ui/input";
import { Label } from "@package/ui/components/ui/label";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@package/ui/components/ui/card";
import { useLoginRoute } from "./use-route.hook";

export const Login: React.FC = () => {
	const { form, handleSubmit } = useLoginRoute();

	return (
		<div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
			<Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
				<CardHeader>
					<CardTitle className="text-center text-3xl font-bold text-gray-800">
						Welcome Back 👋
					</CardTitle>
				</CardHeader>

				<CardContent className="space-y-5">
					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="space-y-2">
							<Label htmlFor="email">Email Address</Label>
							<Input
								id="email"
								type="email"
								placeholder="you@example.com"
								{...form.register("email")}
							/>
							{form.formState.errors.email && (
								<p className="text-sm text-red-500">
									{form.formState.errors.email.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="••••••••"
								{...form.register("password")}
							/>
							{form.formState.errors.password && (
								<p className="text-sm text-red-500">
									{form.formState.errors.password.message}
								</p>
							)}
						</div>

						<Button
							type="submit"
							disabled={form.formState.isSubmitting}
							className="w-full"
							size="lg"
						>
							{form.formState.isSubmitting ? "Signing in..." : "Sign In"}
						</Button>
					</form>

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
