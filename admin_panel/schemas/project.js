export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "place",
      title: "Place",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          {
            title: "Personal",
            value: "personal",
          },
          {
            title: "Scholar",
            value: "scholar",
          },
          {
            title: "Client",
            value: "client",
          },
        ],
      },
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
