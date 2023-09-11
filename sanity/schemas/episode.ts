import { defineField, defineType } from "sanity";

export default defineType({
  name: "episode",
  title: "Episode",
  type: "document",
  description: "Livestream Episode",
  orderings: [
    {
      by: [
        {
          field: "date",
          direction: "desc",
        },
      ],
      title: "Launch Date",
      name: "descDate",
    },
  ],
  fields: [
    defineField({
      name: "episode",
      title: "Episode",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "season",
      title: "Season",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seasonEpisode",
      title: "Season Episode",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      icon: () => "📺",
    }),
    defineField({
      name: "date",
      validation: (Rule) => Rule.required(),
      title: "Launch Date",
      type: "datetime",
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
        timeStep: 15
      },
    }),
    defineField({
      name: "description",
      validation: (Rule) => Rule.required(),
      title: "Description",
      type: "text",
      rows: 10,
      description: "Episode's Description",
    }),
    defineField({
      name: "runtime",
      title: "Runtime",
      type: "number",
    }),
    defineField({
      name: "youtubeUrl",
      title: "Youtube URL",
      type: "url",
      description: "Youtube URL",
    }),
    defineField({
      name: "twitchUrl",
      title: "Twitch URL",
      type: "url",
      description: "Tiwtch URL",
    }),
    defineField({
      name: "linkedinUrl",
      title: "Linkedin URL",
      type: "url",
      description: "Linkedin URL",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      description: "Linkedin URL",
    }),
    defineField({
      name: "applePodcastUrl",
      title: "Apple Podcast URL",
      type: "url",
      description: "Apple Podcast URL",
    }),
    defineField({
      name: "googlePodcastUrl",
      title: "Google Podcast URL",
      type: "url",
      description: "Google Podcast URL",
    }),
    defineField({
      name: "spotifyUrl",
      title: "Spotify URL",
      type: "url",
      description: "Spotify URL",
    }),    
    defineField({
      name: "hosts",
      title: "Hosts",
      validation: (Rule) => {
        return [
          Rule.required(),
          Rule.custom((value, { document }) => {
            if (value && value?.length > 1 && !document?.isLanding) {
              return "You have to include at least one person as Host.";
            }
            return true;
          }),
        ];
      },
      type: "array",
      of: [{ type: "reference", to: { type: "person" } }],
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
      title: "title",
      date: "date",
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: selection.date ? (selection.date as string) : "",
      };
    }
  },
});
