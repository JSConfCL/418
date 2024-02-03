import { defineField, defineType } from "sanity";

export default defineType({
  name: "linkType",
  title: "Link Type",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    })
  ]
});
