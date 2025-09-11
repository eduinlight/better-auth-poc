import type { UseCase } from "../../../shared/types/use-case";
import type { Tag } from "../entities/tag.entity";
import type { TagRepository } from "../repositories/tag-repository";

export type ListTagsInput = Record<string, never>;

export type ListTagsOutput = Tag[];

export type ListTagsContext = {
	tagRepository: TagRepository;
};

export class ListTagsUseCase
	implements UseCase<ListTagsInput, ListTagsContext, ListTagsOutput>
{
	async execute(
		_input: ListTagsInput,
		context: ListTagsContext,
	): Promise<ListTagsOutput> {
		return context.tagRepository.findAll();
	}
}
