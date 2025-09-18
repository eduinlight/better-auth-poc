import { AuthView } from "@daveyplate/better-auth-ui";
import { useParams } from "react-router-dom";

export default function AuthPage() {
	const { pathname } = useParams();
	return (
		<main className="container flex grow flex-col items-center justify-center gap-3 self-center p-4 md:p-6">
			<AuthView pathname={pathname} />
		</main>
	);
}
