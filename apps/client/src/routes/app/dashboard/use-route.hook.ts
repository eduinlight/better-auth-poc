import { useAuth } from "@app/client/src/providers/AuthContext";

export const useDashboardRoute = () => {
	const { user, logout } = useAuth();

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	const stats = [
		{
			name: "Total Users",
			value: "1,247",
			change: "+12%",
			changeType: "positive",
		},
		{
			name: "Active Sessions",
			value: "342",
			change: "+8%",
			changeType: "positive",
		},
		{
			name: "Revenue",
			value: "$54,239",
			change: "-2%",
			changeType: "negative",
		},
		{
			name: "Conversion Rate",
			value: "3.24%",
			change: "+0.5%",
			changeType: "positive",
		},
	];

	const recentActivity = [
		{
			action: "User logged in",
			time: "2 minutes ago",
			type: "success",
		},
		{
			action: "New user registered",
			time: "15 minutes ago",
			type: "info",
		},
		{
			action: "Payment processed",
			time: "1 hour ago",
			type: "success",
		},
		{
			action: "System backup completed",
			time: "2 hours ago",
			type: "info",
		},
	];

	return {
		user,
		handleLogout,
		stats,
		recentActivity,
	};
};