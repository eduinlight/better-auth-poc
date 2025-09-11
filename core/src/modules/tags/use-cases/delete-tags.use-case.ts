import type { UseCase } from "../../../shared/types/use-case";
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

export class DeleteTagsUseCase
	implements UseCase<DeleteTagsInput, DeleteTagsContext, DeleteTagsOutput>
{
	async execute(
		input: DeleteTagsInput,
		context: DeleteTagsContext,
	): Promise<DeleteTagsOutput> {
		const success = await context.tagRepository.delete(input.ids);
		return { success };
	}
}
