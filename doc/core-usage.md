# Core Class Usage

The Core class is the main entrypoint for applications using the @core package. It handles all bus initialization and handler registration automatically.

## Basic Usage

```typescript
import { Core, type CoreDependencies } from "@core";
import { MyTagRepository } from "./repositories/tag.repository";

// 1. Implement required repositories
const dependencies: CoreDependencies = {
    tagRepository: new MyTagRepository(),
};

// 2. Create Core instance
const core = new Core(dependencies);

// 3. Use the buses
const tags = await core.queryBus.execute(new ListTagsQuery());
const newTag = await core.commandBus.execute(new AddTagCommand({
    name: "Important",
    color: "#FF0000"
}));
```

## What Core Does

- **Automatic Handler Registration**: All query and command handlers are registered automatically
- **Context Injection**: Dependencies are injected at initialization time
- **Bus Management**: Provides ready-to-use QueryBus and CommandBus instances
- **Type Safety**: Enforces that applications provide required dependencies

## Required Dependencies

Applications must provide implementations for:

- `tagRepository: TagRepository` - Handles tag persistence operations

## Architecture Benefits

- **Separation**: @core package remains independent of specific implementations
- **Flexibility**: Each application can provide different repository implementations
- **Consistency**: All applications use the same CQRS patterns
- **Testability**: Easy to provide mock implementations for testing