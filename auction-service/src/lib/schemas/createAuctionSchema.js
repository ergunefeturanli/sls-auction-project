const schema = {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        title: {
          type: "string",
          pattern: "^[A-Za-z]+$",
        },
      },
      required: ["title"],
    },
  },
  required: ["body"],
};

export default schema;
