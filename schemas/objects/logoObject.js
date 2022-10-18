export default {
  type: "object",
  name: "logoObject",
  title: "Logo Object",
  fields: [
    {
      title: "Logo 1",
      name: "logo1",
      type: "imageBlock",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo 2",
      name: "logo2",
      type: "imageBlock",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo 3",
      name: "logo3",
      type: "imageBlock",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo 4",
      name: "logo4",
      type: "imageBlock",
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
