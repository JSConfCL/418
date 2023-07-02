import { defineField, defineType } from "sanity";

export default defineType({
  name: "episodio",
  title: "Episodio",
  type: "document",
  description: "Episodio del livestream",
  orderings: [
    {
      by: [
        {
          field: "fecha",
          direction: "desc",
        },
      ],
      title: "Fecha de emisión",
      name: "fechaDesc",
    },
  ],
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
      icon: () => "📺",
    }),
    defineField({
      name: "fecha",
      validation: (Rule) => Rule.required(),
      title: "Fecha de emisión",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    }),
    defineField({
      name: "descripcion",
      validation: (Rule) => Rule.required(),
      title: "Descripción",
      type: "text",
      rows: 10,
      description: "Descripción del episodio",
    }),
    defineField({
      name: "asistentes",
      title: "Asistentes",
      validation: (Rule) => {
        return [
          Rule.required(),
          Rule.custom((value, { document }) => {
            if (value && value?.length > 1 && !document?.isLanding) {
              return "Debes añadir al menos un asistente";
            }
            return true;
          }),
        ];
      },
      type: "array",
      of: [{ type: "reference", to: { type: "persona" } }],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "markdown",
    }),
  ],

  preview: {
    select: {
      title: "titulo",
      fecha: "fecha",
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: selection.fecha ? (selection.fecha as string) : "",
      };
    },
    // select: {
    //   title: "title",
    //   author: "author.name",
    //   media: "mainImage",
    // },
    // prepare(selection) {
    //   const { asistentes } = selection;
    //   return { ...selection, subtitle: author && `by ${author}` };
    // },
  },
});
