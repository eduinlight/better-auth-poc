import type { TagRepository } from "../repositories/tag-repository";

export type DeleteTagsInput = {
	ids: string[];
};

export type DeleteTagsOutput = {
	success: boolean;
};

export type DeleteTagsContext = {
	tagRepository: TagRepository;
};

export class DeleteTagsUseCase {
	async execute(
		input: DeleteTagsInput,
		context: DeleteTagsContext,
	): Promise<DeleteTagsOutput> {
		const success = await context.tagRepository.delete(input.ids);
		return { success };
	}
}
