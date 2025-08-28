import type React from "react";
import { Button } from "@package/ui/components/ui/button";
import { Input } from "@package/ui/components/ui/input";
import { Label } from "@package/ui/components/ui/label";
import { useLoginForm } from "./use-login-form";

export const LoginForm: React.FC = () => {
	const { form, handleSubmit } = useLoginForm();

	return (
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
	);
};

