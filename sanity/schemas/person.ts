import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "nickname",
      title: "Nickname",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, _context) => `${doc.nickname || doc.name || ''}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Avatar",
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "reference", to: { type: "link" } }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar",
    },
  },
});
