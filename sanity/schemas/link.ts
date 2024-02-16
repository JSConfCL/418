import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "linkType" }]
    }),
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    }
  ]
});
