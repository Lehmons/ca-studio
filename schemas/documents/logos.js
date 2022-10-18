export default {
  name: "logos",
  title: "Logos",
  type: "document",
  fields: [
    {
      title: "Logo Set",
      name: "logoset",
      type: "array",
      of: [{ type: "logoObject" }],
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: "Logos",
      };
    },
  },
};
