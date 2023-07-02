import { type SchemaTypeDefinition } from "sanity";

import tag from "./schemas/tag";
import episodio from "./schemas/episodio";
import persona from "./schemas/persona";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [episodio, persona, tag],
};
