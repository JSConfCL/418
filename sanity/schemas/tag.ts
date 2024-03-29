import { defineField, defineType } from "sanity";

export default defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      type: "slug",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
