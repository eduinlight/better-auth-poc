import type { UseCase } from "./types/use-case";

export class UseCaseBus {
	async execute<TInput, TContext, TOutput>(
		useCase: UseCase<TInput, TContext, TOutput>,
		input: TInput,
		context: TContext,
	): Promise<TOutput> {
		return useCase.execute(input, context);
	}
}
