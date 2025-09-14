import { Command, type CommandHandler } from "../../../shared/types/command";
import type { Tag } from "../entities/tag.entity";
import type { TagRepository } from "../repositories/tag-repository";

export type AddTagInput = {
	name: string;
	color?: string;
	description?: string;
};

export type AddTagOutput = Tag;

export class AddTagCommand extends Command<AddTagOutput> {
	constructor(public readonly input: AddTagInput) {
		super();
	}
}

export class AddTagCommandHandler
	implements CommandHandler<AddTagCommand, AddTagOutput>
{
	constructor(private readonly tagRepository: TagRepository) {}

	async execute(command: AddTagCommand): Promise<AddTagOutput> {
		return this.tagRepository.create(command.input);
	}
}
