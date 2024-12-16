export default {
  type: "object",
  name: "logoObject",
  title: "Logo Object",
  fields: [
    {
      title: "Logo 1",
      name: "logo1",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo 2",
      name: "logo2",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo 3",
      name: "logo3",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo 4",
      name: "logo4",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 5",
      name: "logo5",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 6",
      name: "logo6",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 7",
      name: "logo7",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 8",
      name: "logo8",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 9",
      name: "logo9",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 10",
      name: "logo10",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 11",
      name: "logo11",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 12",
      name: "logo12",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
		{
      title: "Logo 13",
      name: "logo13",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "logo1.image.alt",
      media: "logo1.image",
    },
  },
};
