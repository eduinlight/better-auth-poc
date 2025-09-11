import { CoreError } from "../../../shared";

export class TagNotFoundError extends CoreError {
	constructor(id: string) {
		super(`Tag with id "${id}" not found`, "TagNotFoundError");
	}
}
