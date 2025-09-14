import type { DIContainer } from "./di-container";
import type { Command } from "./types/command";

export class CommandBus {
	constructor(private readonly container: DIContainer) {}

	async execute<TCommand extends Command<TOutput>, TOutput>(
		command: TCommand,
	): Promise<TOutput> {
		const handlerName = `${command.constructor.name}Handler`;
		const handler = this.container.resolveHandler(handlerName);
		return handler.execute(command);
	}
}
