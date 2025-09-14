# QueryBus Usage

The QueryBus uses handler registration pattern to execute queries (read operations) in the application.

## Setup and Registration

```typescript
import { QueryBus } from "@core/shared/query-bus";
import { ListTagsQuery, ListTagsQueryHandler } from "@core/modules/tags/queries/list-tags.query";
import type { TagRepository } from "@core/modules/tags/repositories/tag-repository";

const queryBus = new QueryBus();

const context = {
	tagRepository: {} as TagRepository,
};

queryBus.register(ListTagsQuery, new ListTagsQueryHandler(), context);
```

## Example Usage

```typescript
async function exampleQueryUsage() {
	const query = new ListTagsQuery();
	const tags = await queryBus.execute(query);
	return tags;
}
```

## Query Structure

Queries extend the base `Query<TOutput>` class and handlers implement the `QueryHandler` type:

```typescript
import type { Query, QueryHandler } from "@core/shared/types/query";

export class MyQuery extends Query<MyOutput> {}

export class MyQueryHandler implements QueryHandler<MyQuery, MyOutput, MyContext> {
	async execute(query: MyQuery, context: MyContext): Promise<MyOutput> {
		return result;
	}
}
```

## Key Points

- Queries are data containers that extend `Query<TOutput>`
- Handlers contain the business logic and implement `QueryHandler<TQuery, TOutput, TContext>`
- Register handlers with context: `queryBus.register(QueryClass, handlerInstance, context)`
- Execute queries without context: `queryBus.execute(queryInstance)`
- Context is injected at registration time, not execution time
- Queries are for **read operations only** (list, get, find, etc.)