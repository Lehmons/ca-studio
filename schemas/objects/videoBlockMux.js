export default {
  type: "object",
  name: "videoBlockMux",
  title: "Video Block Mux",
  fields: [
    {
      title: "Video",
      name: "video",
      type: "mux.video"
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Portfolio",
      };
    },
  },
};
