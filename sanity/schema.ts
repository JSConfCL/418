import { type SchemaTypeDefinition } from "sanity";

import tag from "./schemas/tag";
import episode from "./schemas/episode";
import person from "./schemas/person";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [episode, person, tag],
};
