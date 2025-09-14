import { CoreError } from "../core-error";

export class HandlerNotFoundError extends CoreError {
	constructor(handlerName: string, type: "query" | "command") {
		super(
			`No ${type} handler registered for: ${handlerName}`,
			"HandlerNotFoundError",
		);
	}
}
