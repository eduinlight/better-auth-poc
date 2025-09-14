import { Query, type QueryHandler } from "../../../shared/types/query";
import type { Tag } from "../entities/tag.entity";
import type { TagRepository } from "../repositories/tag-repository";

export type ListTagsOutput = Tag[];

export class ListTagsQuery extends Query<ListTagsOutput> {}

export class ListTagsQueryHandler
	implements QueryHandler<ListTagsQuery, ListTagsOutput>
{
	constructor(private readonly tagRepository: TagRepository) {}

	async execute(_query: ListTagsQuery): Promise<ListTagsOutput> {
		return this.tagRepository.findAll();
	}
}
