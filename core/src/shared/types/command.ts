export abstract class Command<_TOutput = unknown> {}

export type CommandHandler<
	TCommand extends Command<TOutput>,
	TOutput = unknown,
> = {
	execute(command: TCommand): Promise<TOutput>;
};

export type CommandConstructor<T extends Command = Command> = new (
	...args: unknown[]
) => T;
