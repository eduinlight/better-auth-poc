export function TestButton() {
	return (
		<div className="space-y-4">
			<button
				type="button"
				className="bg-red-500 text-white px-10 py-10 rounded-lg"
			>
				Test Basic Tailwind Classes
			</button>
			<button
				type="button"
				className="bg-primary text-primary-foreground px-10 py-10 rounded-lg hover:bg-primary/90 transition-colors"
			>
				Test Custom Theme Classes
			</button>
		</div>
	);
}
