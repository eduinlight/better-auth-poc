import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Text,
} from "@react-email/components";

interface ForgotPasswordProps {
	resetLink?: string;
	email?: string;
	otp?: string;
}

export const ForgotPassword = ({
	resetLink,
	email,
	otp,
}: ForgotPasswordProps) => (
	<Html>
		<Head />
		<Preview>Password reset request</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Password Reset Request</Heading>
				<Text style={{ ...text, marginBottom: "14px" }}>
					Hi there,
				</Text>
				<Text style={{ ...text, marginBottom: "14px" }}>
					We received a request to reset the password for your account ({email}). 
					If this was you, please use one of the methods below to reset your password.
				</Text>
				<Text style={{ ...text, marginBottom: "24px" }}>
					Click the button below to reset your password:
				</Text>
				<Button style={button} href={resetLink}>
					Reset Password
				</Button>
				<Text style={{ ...text, marginTop: "24px", marginBottom: "14px" }}>
					Or, use this reset code:
				</Text>
				<code style={code}>{otp}</code>
				<Text style={{ ...text, marginTop: "24px", marginBottom: "14px" }}>
					You can also copy and paste this link into your browser:
				</Text>
				<Link
					href={resetLink}
					target="_blank"
					style={{
						...link,
						display: "block",
						marginBottom: "16px",
						wordBreak: "break-all",
					}}
				>
					{resetLink}
				</Link>
				<Text
					style={{
						...text,
						color: "#ababab",
						marginTop: "14px",
						marginBottom: "16px",
					}}
				>
					This reset link and code will expire in 1 hour for security purposes.
				</Text>
				<Text
					style={{
						...text,
						color: "#ababab",
						marginTop: "12px",
						marginBottom: "38px",
					}}
				>
					If you didn&apos;t request a password reset, please ignore this email. Your password will remain secure and unchanged.
				</Text>
			</Container>
		</Body>
	</Html>
);

ForgotPassword.PreviewProps = {
	resetLink: "https://example.com/reset-password?token=abc123",
	email: "user@example.com",
	otp: "RESET123",
} as ForgotPasswordProps;

export default ForgotPassword;

const main = {
	backgroundColor: "#ffffff",
};

const container = {
	paddingLeft: "12px",
	paddingRight: "12px",
	margin: "0 auto",
};

const h1 = {
	color: "#333",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "24px",
	fontWeight: "bold",
	margin: "40px 0",
	padding: "0",
};

const link = {
	color: "#2754C5",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "14px",
	textDecoration: "underline",
};

const text = {
	color: "#333",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "14px",
	margin: "24px 0",
};

const button = {
	backgroundColor: "#2754C5",
	borderRadius: "5px",
	color: "#fff",
	fontSize: "16px",
	fontWeight: "bold",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	width: "100%",
	padding: "12px",
};

const code = {
	display: "inline-block",
	padding: "16px 4.5%",
	width: "90.5%",
	backgroundColor: "#f4f4f4",
	borderRadius: "5px",
	border: "1px solid #eee",
	color: "#333",
	fontSize: "16px",
	fontWeight: "bold",
	textAlign: "center" as const,
	letterSpacing: "1px",
};