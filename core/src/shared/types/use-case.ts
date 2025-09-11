export type UseCase<Input, Context, Output> = {
	execute(input: Input, context: Context): Promise<Output>;
};
