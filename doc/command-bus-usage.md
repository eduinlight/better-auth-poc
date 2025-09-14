# CommandBus Usage

The CommandBus uses handler registration pattern to execute commands (mutation operations) in the application.

## Setup and Registration

```typescript
import { CommandBus } from "@core/shared/command-bus";
import { AddTagCommand, AddTagCommandHandler } from "@core/modules/tags/commands/add-tag.command";
import type { TagRepository } from "@core/modules/tags/repositories/tag-repository";

const commandBus = new CommandBus();

const context = {
	tagRepository: {} as TagRepository,
};

commandBus.register(AddTagCommand, new AddTagCommandHandler(), context);
```

## Example Usage

```typescript
async function exampleCommandUsage() {
	const input = {
		name: "New Tag",
		color: "#FF0000",
		description: "A new tag example"
	};

	const command = new AddTagCommand(input);
	const newTag = await commandBus.execute(command);
	return newTag;
}
```

## Command Structure

Commands extend the base `Command<TOutput>` class and handlers implement the `CommandHandler` type:

```typescript
import type { Command, CommandHandler } from "@core/shared/types/command";

export class MyCommand extends Command<MyOutput> {
	constructor(public readonly input: MyInput) {
		super();
	}
}

export class MyCommandHandler implements CommandHandler<MyCommand, MyOutput, MyContext> {
	async execute(command: MyCommand, context: MyContext): Promise<MyOutput> {
		return result;
	}
}
```

## Key Points

- Commands are data containers that extend `Command<TOutput>` and hold input data
- Handlers contain the business logic and implement `CommandHandler<TCommand, TOutput, TContext>`
- Register handlers with context: `commandBus.register(CommandClass, handlerInstance, context)`
- Execute commands without context: `commandBus.execute(commandInstance)`
- Context is injected at registration time, not execution time
- Commands are for **mutation operations** (create, update, delete)
- Commands can modify state and have side effects