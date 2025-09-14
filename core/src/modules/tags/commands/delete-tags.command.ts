import { Command, type CommandHandler } from "../../../shared/types/command";
import type { TagRepository } from "../repositories/tag-repository";

export type DeleteTagsInput = {
	ids: string[];
};

export type DeleteTagsOutput = {
	success: boolean;
};

export class DeleteTagsCommand extends Command<DeleteTagsOutput> {
	constructor(public readonly input: DeleteTagsInput) {
		super();
	}
}

export class DeleteTagsCommandHandler
	implements CommandHandler<DeleteTagsCommand, DeleteTagsOutput>
{
	constructor(private readonly tagRepository: TagRepository) {}

	async execute(command: DeleteTagsCommand): Promise<DeleteTagsOutput> {
		const success = await this.tagRepository.delete(command.input.ids);
		return { success };
	}
}
