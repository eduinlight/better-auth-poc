import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@package/ui/components/ui/card";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const Dashboard: React.FC = () => {
	const { user, logout } = useAuth();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			<Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card Description</CardDescription>
					<CardAction>Card Action</CardAction>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
			{/* Navigation */}
			<nav className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center space-x-4">
							<div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
								<svg
									className="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
								Dashboard
							</h1>
						</div>

						<div className="flex items-center space-x-4">
							<div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
								<span>Online</span>
							</div>

							<div className="relative">
								<button
									onClick={() => setIsDropdownOpen(!isDropdownOpen)}
									className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 p-2"
								>
									<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
										<span className="text-white font-medium text-sm">
											{(user?.name || user?.email)?.charAt(0).toUpperCase()}
										</span>
									</div>
									<span className="hidden md:block font-medium text-gray-700">
										{user?.name || user?.email}
									</span>
									<svg
										className="w-4 h-4 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>

								{isDropdownOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
										<div className="px-4 py-2 border-b border-gray-100">
											<p className="text-sm font-medium text-gray-900">
												{user?.name || "User"}
											</p>
											<p className="text-xs text-gray-500">{user?.email}</p>
										</div>
										<button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
											<svg
												className="w-4 h-4 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>
											Profile
										</button>
										<button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
											<svg
												className="w-4 h-4 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											Settings
										</button>
										<hr className="my-1" />
										<button
											type="button"
											onClick={handleLogout}
											className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center cursor-pointer"
										>
											<svg
												className="w-4 h-4 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
												/>
											</svg>
											Sign out
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
				{/* Welcome Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-2">
						Welcome back,{" "}
						{user?.name?.split(" ")[0] || user?.email?.split("@")[0]}! 👋
					</h2>
					<p className="text-gray-600">
						Here's what's happening with your account today.
					</p>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{stats.map((stat, index) => (
						<div
							key={stat.name}
							className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
						>
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										{stat.name}
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{stat.value}
									</p>
								</div>
								<div
									className={`flex items-center text-sm font-medium ${
										stat.changeType === "positive"
											? "text-green-600"
											: "text-red-600"
									}`}
								>
									{stat.changeType === "positive" ? (
										<svg
											className="w-4 h-4 mr-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M7 17l10-10M17 7v10H7"
											/>
										</svg>
									) : (
										<svg
											className="w-4 h-4 mr-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 17l-10-10M7 17V7h10"
											/>
										</svg>
									)}
									{stat.change}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Main Content Area */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Chart Area */}
					<div className="lg:col-span-2">
						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-lg font-semibold text-gray-900">
									Analytics Overview
								</h3>
								<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
									View All
								</button>
							</div>
							<div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
								<div className="text-center">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
									<p className="text-lg font-semibold text-gray-900 mb-2">
										Chart Coming Soon
									</p>
									<p className="text-gray-600">
										Analytics chart will be displayed here
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Recent Activity */}
						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">
								Recent Activity
							</h3>
							<div className="space-y-4">
								{[
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
								].map((activity, index) => (
									<div key={index} className="flex items-center space-x-3">
										<div
											className={`w-2 h-2 rounded-full ${
												activity.type === "success"
													? "bg-green-400"
													: "bg-blue-400"
											}`}
										></div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900">
												{activity.action}
											</p>
											<p className="text-xs text-gray-500">{activity.time}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
