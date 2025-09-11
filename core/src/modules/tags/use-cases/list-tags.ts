import type { Tag } from "../entities/tag";
import type { TagRepository } from "../repositories/tag-repository";

export type ListTagsInput = {};

export type ListTagsOutput = Tag[];

export type ListTagsContext = {
	tagRepository: TagRepository;
};

export class ListTagsUseCase {
	async execute(
		input: ListTagsInput,
		context: ListTagsContext,
	): Promise<ListTagsOutput> {
		return context.tagRepository.findAll();
	}
}
