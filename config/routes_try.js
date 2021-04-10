const TryRouters = {
  path: "/trying",
  name: "Testing",
  icon: "smile",
  routes: [
    {
      path: "./help",
      name: "Help Doc",
      routes: [
        {
          path: "./help1",
          component: "./trying/help_doc",
          name: "Help1",
        },
      ],
    },
    {
      path: "./form",
      name: "Form",
      routes: [
        {
          path: "./dynamic",
          component: "./trying/form/dynamic",
          name: "Dynamic",
        },
      ],
    },
    {
      path: "./refresh",
      name: "Refresh",
      routes: [
        {
          path: "./timeout",
          component: "./trying/refresh/timeout",
          name: "Timeout",
        },
      ],
    },
    {
      path: "./plot",
      name: "Plot",
      icon: "area-chart",
      routes: [
        {
          path: "./simple",
          component: "./trying/plot/simple",
          name: "Simple",
        },
        {
          path: "./heat_map",
          component: "./trying/plot/heat_map",
          name: "HeatMap",
        },
      ],
    },
    {
      path: "./table",
      name: "Table",
      icon: "smile",
      routes: [
        {
          path: "./TableToolbar",
          component: "./trying/table/TableToolbar",
          name: "TableToolbar",
          icon: "table",
        },
        {
          path: "./TableBatchAction",
          component: "./trying/table/TableBatchAction",
          name: "TableBatchAction",
          icon: "table",
        },
        {
          path: "./DynamicSearchTable",
          component: "./trying/table/DynamicSearchTable",
          name: "DynamicSearchTable",
          icon: "table",
        },
        {
          path: "./SearchTable",
          component: "./trying/table/SearchTable",
          name: "SearchTable",
          icon: "table",
        },
        {
          path: "./AntdTableColumnFilter",
          component: "./trying/table/AntdTableColumnFilter",
          name: "AntdTableColumnFilter",
          icon: "table",
        },
      ],
    },
    {
      path: "./modal",
      name: "Modal",
      routes: [
        {
          path: "./delete",
          component: "./trying/modal/delete",
          name: "Delete",
        },
      ],
    },
  ],
};

export { TryRouters };
