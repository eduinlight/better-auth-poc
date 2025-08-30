import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Text,
} from "@react-email/components";

interface EmailValidationOtpProps {
	otp?: string;
	email?: string;
}

export const EmailValidationOtp = ({
	otp,
	email,
}: EmailValidationOtpProps) => (
	<Html>
		<Head />
		<Preview>Verify your email address</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Verify Your Email Address</Heading>
				<Text style={{ ...text, marginBottom: "14px" }}>
					Hi there,
				</Text>
				<Text style={{ ...text, marginBottom: "14px" }}>
					Please use the following code to verify your email address {email}:
				</Text>
				<code style={code}>{otp}</code>
				<Text
					style={{
						...text,
						color: "#ababab",
						marginTop: "14px",
						marginBottom: "16px",
					}}
				>
					This code will expire in 10 minutes for security purposes.
				</Text>
				<Text
					style={{
						...text,
						color: "#ababab",
						marginTop: "12px",
						marginBottom: "38px",
					}}
				>
					If you didn&apos;t request this verification, you can safely ignore this email.
				</Text>
			</Container>
		</Body>
	</Html>
);

EmailValidationOtp.PreviewProps = {
	otp: "123456",
	email: "user@example.com",
} as EmailValidationOtpProps;

export default EmailValidationOtp;

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

const text = {
	color: "#333",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "14px",
	margin: "24px 0",
};

const code = {
	display: "inline-block",
	padding: "16px 4.5%",
	width: "90.5%",
	backgroundColor: "#f4f4f4",
	borderRadius: "5px",
	border: "1px solid #eee",
	color: "#333",
	fontSize: "18px",
	fontWeight: "bold",
	textAlign: "center" as const,
	letterSpacing: "2px",
};