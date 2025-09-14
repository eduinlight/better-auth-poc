import type { DIContainer } from "./di-container";
import type { Query } from "./types/query";

export class QueryBus {
	constructor(private readonly container: DIContainer) {}

	async execute<TQuery extends Query<TOutput>, TOutput>(
		query: TQuery,
	): Promise<TOutput> {
		const handlerName = `${query.constructor.name}Handler`;
		const handler = this.container.resolveHandler(handlerName);
		return handler.execute(query);
	}
}
