import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@app/client/src/providers/AuthContext";

export const useSignupRoute = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { signup, isAuthenticated } = useAuth();
	const navigate = useNavigate();

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

	return {
		email,
		setEmail,
		password,
		setPassword,
		name,
		setName,
		confirmPassword,
		setConfirmPassword,
		error,
		isLoading,
		isAuthenticated,
		handleSubmit,
	};
};