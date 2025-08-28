import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@app/client/src/providers/AuthContext";

const loginSchema = z.object({
	email: z.email("Please enter a valid email address"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(6, "Password must be at least 6 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: LoginFormData) => {
		try {
			await login(data.email, data.password);
			navigate("/");
		} catch (err) {
			toast.error("User or password incorrect");
		}
	};

	const handleSubmit = form.handleSubmit(onSubmit);

	return {
		form,
		handleSubmit,
	};
};

