import type { Tag } from "../entities/tag";

export type TagRepository = {
	findAll(): Promise<Tag[]>;
	findById(id: string): Promise<Tag | null>;
	create(data: Omit<Tag, "id" | "createdAt" | "updatedAt">): Promise<Tag>;
	update(
		id: string,
		data: Partial<Omit<Tag, "id" | "createdAt" | "updatedAt">>,
	): Promise<Tag | null>;
	delete(ids: string[]): Promise<boolean>;
};
