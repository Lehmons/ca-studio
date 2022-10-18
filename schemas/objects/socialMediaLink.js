import toPlainText from "../../lib/toPlainText";
export default {
  title: "Social Media Link",
  name: "socialMediaLink",
  type: "object",
  fields: [
    {
      title: "Link",
      name: "link",
      type: "normal",
    },
  ],
  preview: {
    select: {
      link: "link",
    },
    prepare: ({ link }) => {
      return {
        title: link ? toPlainText(link) : "No link defined",
      };
    },
  },
};
