import {
	AddTagCommandHandler,
	DeleteTagsCommandHandler,
	EditTagCommandHandler,
} from "./modules/tags/commands";
import { ListTagsQueryHandler } from "./modules/tags/queries/list-tags.query";
import type { TagRepository } from "./modules/tags/repositories/tag-repository";
import { CommandBus } from "./shared/command-bus";
import { DIContainer } from "./shared/di-container";
import { QueryBus } from "./shared/query-bus";

export type CoreDependencies = {
	tagRepository: TagRepository;
};

export class Core {
	public readonly queryBus: QueryBus;
	public readonly commandBus: CommandBus;
	private readonly container: DIContainer;

	constructor(dependencies: CoreDependencies) {
		this.container = new DIContainer();

		this.registerDependencies(dependencies);
		this.registerHandlers();

		this.queryBus = new QueryBus(this.container);
		this.commandBus = new CommandBus(this.container);
	}

	private registerDependencies(dependencies: CoreDependencies): void {
		this.container.register(TagRepository, dependencies.tagRepository);
	}

	private registerHandlers(): void {
		this.container.registerHandler(
			"ListTagsQueryHandler",
			(container) => new ListTagsQueryHandler(container.get(TagRepository)),
		);

		this.container.registerHandler(
			"AddTagCommandHandler",
			(container) => new AddTagCommandHandler(container.get(TagRepository)),
		);

		this.container.registerHandler(
			"EditTagCommandHandler",
			(container) => new EditTagCommandHandler(container.get(TagRepository)),
		);

		this.container.registerHandler(
			"DeleteTagsCommandHandler",
			(container) => new DeleteTagsCommandHandler(container.get(TagRepository)),
		);
	}
}
