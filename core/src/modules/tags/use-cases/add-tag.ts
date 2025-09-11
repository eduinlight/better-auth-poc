import type { Tag } from "../entities/tag";
import type { TagRepository } from "../repositories/tag-repository";

export type AddTagInput = {
	name: string;
	color?: string;
	description?: string;
};

export type AddTagOutput = Tag;

export type AddTagContext = {
	tagRepository: TagRepository;
};

export class AddTagUseCase {
	async execute(
		input: AddTagInput,
		context: AddTagContext,
	): Promise<AddTagOutput> {
		return context.tagRepository.create(input);
	}
}
