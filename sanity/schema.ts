import { type SchemaTypeDefinition } from "sanity";

// Utitilies
import link from "./schemas/link";
import linkType from "./schemas/linkType";
import tag from "./schemas/tag";

// Business
import episode from "./schemas/episode";
import person from "./schemas/person";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Utitilies
    link,
    linkType,
    tag,

    // Business
    episode,
    person,
  ],
};
