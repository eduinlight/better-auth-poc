import type { UseCase } from "../../../shared/types/use-case";
import type { Tag } from "../entities/tag.entity";
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

export class AddTagUseCase
	implements UseCase<AddTagInput, AddTagContext, AddTagOutput>
{
	async execute(
		input: AddTagInput,
		context: AddTagContext,
	): Promise<AddTagOutput> {
		return context.tagRepository.create(input);
	}
}
