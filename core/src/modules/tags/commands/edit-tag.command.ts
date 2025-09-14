import { Command, type CommandHandler } from "../../../shared/types/command";
import type { Tag } from "../entities/tag.entity";
import { TagNotFoundError } from "../errors";
import type { TagRepository } from "../repositories/tag-repository";

export type EditTagInput = {
	id: string;
	name?: string;
	color?: string;
	description?: string;
};

export type EditTagOutput = Tag | null;

export class EditTagCommand extends Command<EditTagOutput> {
	constructor(public readonly input: EditTagInput) {
		super();
	}
}

export class EditTagCommandHandler
	implements CommandHandler<EditTagCommand, EditTagOutput>
{
	constructor(private readonly tagRepository: TagRepository) {}

	async execute(command: EditTagCommand): Promise<EditTagOutput> {
		const { id, ...updateData } = command.input;

		const existingTag = await this.tagRepository.findById(id);
		if (!existingTag) {
			throw new TagNotFoundError(id);
		}

		return this.tagRepository.update(id, updateData);
	}
}
