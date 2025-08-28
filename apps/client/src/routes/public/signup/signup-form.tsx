import type React from "react";
import { Button } from "@package/ui/components/ui/button";
import { Input } from "@package/ui/components/ui/input";
import { Label } from "@package/ui/components/ui/label";
import { useSignupForm } from "./use-signup-form";

export const SignupForm: React.FC = () => {
	const { form, handleSubmit } = useSignupForm();

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="name">Full Name</Label>
				<Input
					id="name"
					type="text"
					placeholder="Your full name"
					{...form.register("name")}
				/>
				{form.formState.errors.name && (
					<p className="text-sm text-red-500">
						{form.formState.errors.name.message}
					</p>
				)}
			</div>

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

			<div className="space-y-2">
				<Label htmlFor="confirmPassword">Confirm Password</Label>
				<Input
					id="confirmPassword"
					type="password"
					placeholder="••••••••"
					{...form.register("confirmPassword")}
				/>
				{form.formState.errors.confirmPassword && (
					<p className="text-sm text-red-500">
						{form.formState.errors.confirmPassword.message}
					</p>
				)}
			</div>

			<Button
				type="submit"
				disabled={form.formState.isSubmitting}
				className="w-full"
				size="lg"
			>
				{form.formState.isSubmitting ? "Creating Account..." : "Create Account"}
			</Button>
		</form>
	);
};

