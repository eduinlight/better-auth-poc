import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@app/client/src/providers/AuthContext";

const signupSchema = z
	.object({
		name: z.string().min(1, "Name is required"),
		email: z.email("Please enter a valid email address"),
		password: z
			.string()
			.min(1, "Password is required")
			.min(6, "Password must be at least 6 characters long"),
		confirmPassword: z.string().min(1, "Please confirm your password"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

type SignupFormData = z.infer<typeof signupSchema>;

export const useSignupForm = () => {
	const { signup } = useAuth();
	const navigate = useNavigate();

	const form = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: SignupFormData) => {
		try {
			await signup(data.email, data.password, data.name);
			navigate("/");
		} catch (err) {
			toast.error("Failed to create account. Please try again.");
		}
	};

	const handleSubmit = form.handleSubmit(onSubmit);

	return {
		form,
		handleSubmit,
	};
};

