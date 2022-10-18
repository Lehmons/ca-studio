export default {
  title: "Email Link",
  name: "emailLink",
  type: "object",
  fields: [
    {
      title: "Link",
      name: "link",
      type: "object",
      fields: [
        {
          name: "openInNewTab",
          type: "boolean",
          title: "Open In New Tab",
        },
        {
          name: "externalLink",
          type: "url",
          title: "External Link",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
              allowRelative: false,
            }),
        },
      ],
    },
  ],
};
