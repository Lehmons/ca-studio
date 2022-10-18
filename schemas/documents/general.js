export default {
  name: "general",
  title: "General",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "backgroundColour",
      title: "Background Colour",
      type: "color",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fontSizeDesktop",
      title: "Font Size Desktop",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fontSizeMobile",
      title: "Font Size Mobile",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "letterSpacing",
      title: "Letter Spacing",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lineHeight",
      title: "Line Height",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "email",
      title: "Email",
      type: "normal",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      of: [{ type: "socialMediaLink" }],
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: "General",
      };
    },
  },
};
