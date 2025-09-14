# Complete CQRS Example

This example shows how to set up and use the QueryBus and CommandBus with handler registration.

## Setup

```typescript
import { QueryBus } from "@core/shared/query-bus";
import { CommandBus } from "@core/shared/command-bus";
import { 
    ListTagsQuery, 
    ListTagsQueryHandler 
} from "@core/modules/tags/queries/list-tags.query";
import { 
    AddTagCommand, 
    AddTagCommandHandler,
    EditTagCommand,
    EditTagCommandHandler,
    DeleteTagsCommand,
    DeleteTagsCommandHandler
} from "@core/modules/tags/commands";
import type { TagRepository } from "@core/modules/tags/repositories/tag-repository";

const queryBus = new QueryBus();
const commandBus = new CommandBus();

const context = {
    tagRepository: {} as TagRepository,
};

queryBus.register(ListTagsQuery, new ListTagsQueryHandler(), context);

commandBus.register(AddTagCommand, new AddTagCommandHandler(), context);
commandBus.register(EditTagCommand, new EditTagCommandHandler(), context);
commandBus.register(DeleteTagsCommand, new DeleteTagsCommandHandler(), context);
```

## Usage Examples

### Query Example

```typescript
async function getAllTags() {
    const query = new ListTagsQuery();
    const tags = await queryBus.execute(query);
    return tags;
}
```

### Command Examples

```typescript
async function createTag() {
    const command = new AddTagCommand({
        name: "Important",
        color: "#FF0000",
        description: "Important tasks"
    });
    
    const newTag = await commandBus.execute(command);
    return newTag;
}

async function updateTag(tagId: string) {
    const command = new EditTagCommand({
        id: tagId,
        name: "Updated Name",
        color: "#00FF00"
    });
    
    const updatedTag = await commandBus.execute(command);
    return updatedTag;
}

async function removeTags(tagIds: string[]) {
    const command = new DeleteTagsCommand({ ids: tagIds });
    const result = await commandBus.execute(command);
    return result.success;
}
```

## Complete Flow

```typescript
async function tagManagementFlow() {
    const newTag = await commandBus.execute(
        new AddTagCommand({
            name: "Work",
            color: "#0066CC"
        })
    );
    
    console.log("Created tag:", newTag);
    
    const allTags = await queryBus.execute(new ListTagsQuery());
    console.log("All tags:", allTags);
    
    if (newTag.id) {
        const updatedTag = await commandBus.execute(
            new EditTagCommand({
                id: newTag.id,
                description: "Work-related tasks"
            })
        );
        console.log("Updated tag:", updatedTag);
    }
    
    const finalTags = await queryBus.execute(new ListTagsQuery());
    console.log("Final tags:", finalTags);
}
```

## Key Benefits

- **Separation of Concerns**: Queries and commands are handled separately
- **Context Injection**: Dependencies are injected at registration time
- **Type Safety**: Full TypeScript support with proper typing
- **Testability**: Easy to mock handlers for testing
- **Consistency**: Uniform way to handle all operations
- **Extensibility**: Easy to add middleware, logging, validation, etc.