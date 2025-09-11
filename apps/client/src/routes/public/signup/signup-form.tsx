import { Button } from "@package/ui/components/ui/button";
import { Input } from "@package/ui/components/ui/input";
import { Label } from "@package/ui/components/ui/label";
import type React from "react";
import { useId } from "react";
import { useSignupForm } from "./use-signup-form";

export const SignupForm: React.FC = () => {
	const { form, handleSubmit } = useSignupForm();
	const nameId = useId();
	const emailId = useId();
	const passwordId = useId();
	const confirmPasswordId = useId();

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor={nameId}>Full Name</Label>
				<Input
					id={nameId}
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
				<Label htmlFor={emailId}>Email Address</Label>
				<Input
					id={emailId}
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
				<Label htmlFor={passwordId}>Password</Label>
				<Input
					id={passwordId}
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
				<Label htmlFor={confirmPasswordId}>Confirm Password</Label>
				<Input
					id={confirmPasswordId}
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
