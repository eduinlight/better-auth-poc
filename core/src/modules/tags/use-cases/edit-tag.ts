import type { Tag } from "../entities/tag";
import { TagNotFoundError } from "../errors";
import type { TagRepository } from "../repositories/tag-repository";

export type EditTagInput = {
	id: string;
	name?: string;
	color?: string;
	description?: string;
};

export type EditTagOutput = Tag | null;

export type EditTagContext = {
	tagRepository: TagRepository;
};

export class EditTagUseCase {
	async execute(
		input: EditTagInput,
		context: EditTagContext,
	): Promise<EditTagOutput> {
		const { id, ...updateData } = input;

		const existingTag = await context.tagRepository.findById(id);
		if (!existingTag) {
			throw new TagNotFoundError(id);
		}

		return context.tagRepository.update(id, updateData);
	}
}
