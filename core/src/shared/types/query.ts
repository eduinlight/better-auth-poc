export abstract class Query<_TOutput = unknown> {}

export type QueryHandler<TQuery extends Query<TOutput>, TOutput = unknown> = {
	execute(query: TQuery): Promise<TOutput>;
};

export type QueryConstructor<T extends Query = Query> = new (
	...args: unknown[]
) => T;
