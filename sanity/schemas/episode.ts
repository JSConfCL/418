// We can base this model on Spotify/Twitch models/API
//   This would be a mix because the nature but for standard names and business definitions
//
// Ref: https://developer.spotify.com/documentation/web-api/reference/get-an-episode
// Ref: https://dev.twitch.tv/docs/api/videos/

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
          field: "datetime",
          direction: "desc",
        },
      ],
      title: "Air Date",
      name: "airdate",
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
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      icon: () => "📺",
    }),
    defineField({
      name: "airdate",
      validation: (Rule) => Rule.required(),
      title: "Air Date",
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
      description: "Episode Description",
    }),
    defineField({
      name: "duration",
      title: "Duration",
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
      name: "hosts",
      title: "Hosts",
      validation: (Rule) => {
        return [
          Rule.required(),
          Rule.custom((value, { document }) => {
            if (value && value?.length > 1 && !document?.isLanding) {
              return "You must add at least 1 host.";
            }
            return true;
          }),
        ];
      },
      type: "array",
      of: [{ type: "reference", to: { type: "person" } }],
    }),
    defineField({
      name: "guests",
      title: "Guests",
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
      airdate: "airdate",
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: selection.airdate ? (selection.airdate as string) : "",
      };
    }
  },
});
