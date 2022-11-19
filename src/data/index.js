export const View1Slug = "test-view1";
export const View2Slug = "test-view2";
export const View3Slug = "test-view3";
export const View4Slug = "test-view4";
export const TableSlug1 = "test-view1";
export const TableSlug2 = "test-view2";
export const TableSlug3 = "test-view3";
export const StatisticSlug1 = "statistic-1";
export const StatisticSlug2 = "statistic-2";
export const StatisticSlug3 = "statistic-3";
export const StatisticSlug4 = "statistic-4";

export const view1Data = {
  description: null,
  id: "232814739811",
  name: "Test View1",
  slug: "test-view1",
  view: {
    id: "1",
    name: "Test View1",
    slug: "test-views1",
    nodes: [
      {
        order_number: 1,
        size: 24,
        node: {
          id: "1939184701938",
          name: "Test View1",
          node_type: "table",
          order_number: 2,
          slug: "test-view2",
          table: {
            title: "Test Table2",
          },
        },
      },
    ],
  },
  users: [
    {
      email: "test@gmail.com",
      id: "12489128413821823",
      joined_at: "2022-08-09",
      name: "Test1",
      role: "admin",
      status: "active",
    },
  ],
  workspace_id: 19841279847129,
};

export const view2Data = {
  description: null,
  id: "232814739812",
  name: "Test View2",
  slug: "test-view2",
  view: {
    id: "1",
    name: "Test View2",
    slug: "test-views2",
    nodes: [
      {
        order_number: 3,
        size: 6, // Assume a page size is 24
        node: {
          id: "1939184701938",
          name: "Test View2",
          node_type: "statistic", // https://ant.design/components/statistic/
          order_number: 2,
          slug: "statistic-1",
        },
      },
      {
        order_number: 3,
        size: 6,
        node: {
          id: "1939184701938",
          name: "Test View2",
          node_type: "statistic",
          order_number: 2,
          slug: "statistic-2", // https://ant.design/components/statistic/
        },
      },
      {
        order_number: 3,
        size: 6,
        node: {
          id: "1939184701938",
          name: "Test View2",
          node_type: "statistic", // https://ant.design/components/statistic/
          order_number: 2,
          slug: "statistic-3",
        },
      },
      {
        order_number: 3,
        size: 6,
        node: {
          id: "1939184701938",
          name: "Test View2",
          node_type: "statistic", // https://ant.design/components/statistic/
          order_number: 2,
          slug: "statistic-4",
        },
      },
      {
        order_number: 4,
        size: 12,
        height: 8, // Assume one full screen is 24
        node: {
          id: "1939184701938",
          name: "Test ",// https://charts.ant.design/en/examples/column/grouped#basic
          order_number: 2,
          slug: "group-column-chart-1",
          node_type: "chart",
          table: {
            title: "Test Chart",
          },
        },
      },
      {
        order_number: 4,
        size: 12,
        height: 8, // Assume one full screen is 24
        node: {
          id: "1939184701938",
          name: "Test ",
          node_type: "list", //https://ant.design/components/list/ - one with title and description
          order_number: 2,
          slug: "list-view1",
          table: {
            title: "List",
          },
        },
      },
      {
        order_number: 1,
        size: null,
        node: {
          id: "1939184701937",
          name: "Test View2",
          node_type: "table",
          order_number: 1,
          slug: "test-view3",
          table: {
            title: "Test Table1",
          },
        },
      },
    ],
  },
  users: [
    {
      email: "test@gmail.com",
      id: "12489128413821823",
      joined_at: "2022-08-09",
      name: "Test1",
      role: "admin",
      status: "active",
    },
  ],
  workspace_id: 19841279847129,
};

export const view3Data = {
  description: null,
  id: "232814739813",
  name: "Test View3",
  slug: "test-view3",
  view: {
    id: "1",
    name: "Test View3",
    slug: "test-view3",
    nodes: [
      {
        order_number: 1,
        size: 24,
        node: {
          id: "1939184701940",
          name: "Test View3",
          node_type: "table",
          order_number: 2,
          slug: "test-view1",
          table: {
            title: "Test Table3",
          },
        },
      },
    ],
  },
  users: [
    {
      email: "test@gmail.com",
      id: "12489128413821823",
      joined_at: "2022-08-09",
      name: "Test1",
      role: "admin",
      status: "active",
    },
  ],
  workspace_id: 19841279847129,
};
export const view4Data = {
  description: null,
  id: "232814739814",
  name: "Test View4",
  slug: "test-view4",
  view: {
    id: "1",
    name: "Test View4",
    slug: "test-view4",
    nodes: [
      {
        order_number: 3,
        size: 6, // Assume a page size is 24
        node: {
          id: "1939184701939",
          name: "Test View4",
          node_type: "statistic", // https://ant.design/components/statistic/
          order_number: 2,
          slug: "statistic-1",
        },
      },
      {
        order_number: 3,
        size: 6,
        node: {
          id: "1939184701939",
          name: "Test View4",
          node_type: "statistic",
          order_number: 2,
          slug: "statistic-2", // https://ant.design/components/statistic/
        },
      },
      {
        order_number: 3,
        size: 6,
        node: {
          id: "1939184701939",
          name: "Test View4",
          node_type: "statistic", // https://ant.design/components/statistic/
          order_number: 2,
          slug: "statistic-3",
        },
      },
      {
        order_number: 3,
        size: 6,
        node: {
          id: "1939184701939",
          name: "Test View4",
          node_type: "statistic", // https://ant.design/components/statistic/
          order_number: 2,
          slug: "statistic-4",
        },
      },
      {
        order_number: 4,
        size: 12,
        height: 8, // Assume one full screen is 24
        node: {
          id: "1939184701938",
          name: "Test ",// https://charts.ant.design/en/examples/column/grouped#basic
          order_number: 2,
          slug: "group-column-chart-1",
          node_type: "chart",
          table: {
            title: "Test Chart",
          },
        },
      },
      {
        order_number: 4,
        size: 12,
        height: 8, // Assume one full screen is 24
        node: {
          id: "1939184701938",
          name: "Test ",
          node_type: "list", //https://ant.design/components/list/ - one with title and description
          order_number: 2,
          slug: "list-view1",
          table: {
            title: "List",
          },
        },
      },
    ],
  },
  users: [
    {
      email: "test@gmail.com",
      id: "12489128413821823",
      joined_at: "2022-08-09",
      name: "Test1",
      role: "admin",
      status: "active",
    },
  ],
  workspace_id: 19841279847129,
}

export const table1Data = {
  actions: [
    {
      id: 773113,
      location: "per_row",
      mapping: {
        id: "d_id",
      },
      name: "View 1",
      slug: "view-details",
      view: {
        description: "View 1",
        id: "23232",
        name: "View 1",
        slug: "test-view4",
      },
      type: "view",
    },
  ],
  columns: [
    {
      dataIndex: "first_name",
      id: 1,
      key: "first_name",
      label: "First Name",
      name: "first_name",
      order: 10,
      title: "First Name",
      type: "text",
    },
    {
      dataIndex: "last_name",
      id: 2,
      key: "last_name",
      label: "Last Name",
      name: "last_name",
      order: 20,
      title: "Last Name",
      type: "text",
    },
    {
      dataIndex: "dob",
      id: 3,
      key: "dob",
      label: "Date of Birth",
      name: "dob",
      order: 30,
      title: "Date of Birth",
      type: "date",
    },
  ],
  count: 3,
  result: [
    {
      dob: "01/16/2010",
      first_name: "Tomme",
      id: 2873821321,
      last_name: "Teststs",
    },
    {
      dob: "01/16/2010",
      first_name: "Tomme",
      id: 2873821322,
      last_name: "Teststs",
    },
    {
      dob: "01/16/2010",
      first_name: "Tomme",
      id: 2873821323,
      last_name: "Teststs",
    },
  ],
};

// Displayed on view 1
export const table2Data = {
  actions: [
    {
      id: 773113,
      location: "per_row",
      mapping: {
        id: "d_id",
      },
      name: "View 1",
      slug: "view-details",
      view: {
        description: "View 1",
        id: "23232",
        name: "View 1",
        slug: "test-view2",
      },
      type: "view",
    },
  ],
  columns: [
    {
      dataIndex: "gender",
      id: 4,
      key: "gender",
      label: "Gender",
      name: "gender",
      order: 40,
      title: "Gender",
      type: "text",
    },
    {
      dataIndex: "telephone",
      id: 260,
      key: "telephone",
      label: "Telephone",
      name: "telephone",
      order: 45,
      title: "Telephone",
      type: "text",
    },
    {
      dataIndex: "email",
      id: 264,
      key: "email",
      label: "Email",
      name: "email",
      order: 48,
      title: "Email",
      type: "text",
    },
  ],
  count: 3,
  result: [
    {
      email: "jen@gmail.com",
      gender: "M",
      id: 2873821321,
      telephone: "283-283-0293",
    },
    {
      email: "alan@gmail.com",
      gender: "M",
      id: 2873821322,
      telephone: "283-283-0293",
    },
    {
      email: "claire@gmail.com",
      gender: "M",
      id: 2873821323,
      telephone: "283-283-0293",
    },
  ],
};

// Displayed at last in view 2
export const table3Data = {
  actions: [
    {
      id: 773113,
      location: "per_row",
      mapping: {
        id: "d_id",
      },
      name: "View 1",
      slug: "view-details",
      view: {
        description: "View 1",
        id: "23232",
        name: "View 1",
        slug: "test-view3",
      },
      type: "view",
    },
  ],
  columns: [
    {
      dataIndex: "street_address",
      id: 5,
      key: "street_address",
      label: "Street Address",
      name: "street_address",
      order: 50,
      title: "Street Address",
      type: "text",
    },
    {
      dataIndex: "zip",
      id: 8,
      key: "zip",
      label: "Zip",
      name: "zip",
      order: 80,
      title: "Zip",
      type: "text",
    },
    {
      dataIndex: "account_number",
      id: 246,
      key: "account_number",
      label: "Account Number",
      name: "account_number",
      order: 150,
      title: "Account Number",
      type: "text",
    },
  ],
  count: 3,
  result: [
    {
      account_number: "3741237461278",
      id: 2873821321,
      street_address: "1432832 test ST APT 214",
      zip: "90503",
    },
    {
      account_number: "3741237461278",
      id: 2873821322,
      street_address: "1432832 test ST APT 214",
      zip: "90503",
    },
    {
      account_number: "3741237461278",
      id: 2873821323,
      street_address: "1432832 test ST APT 214",
      zip: "90503",
    },
  ],
};

// View 2 statistic 4 blocks
export const statistic1Data = {
  title: "Statistic 1",
  value: "Value 1",
};

export const statistic2Data = {
  title: "Statistic 2",
  value: "Value 2",
};

export const statistic3Data = {
  title: "Statistic 3",
  value: "Value 3",
};

export const statistic4Data = {
  title: "Statistic 4",
  value: "Value 4",
};

// Chart data view 2
export const groupcolumnData = {
  config: {
    isGroup: true,
    xField: "xval",
    yField: "yval",
    seriesField: "series",
    width: 600,
  },
  data: [
    {
      name: "London",
      xval: "Jan.",
      yval: 18.9,
    },
    {
      name: "London",
      xval: "Feb.",
      yval: 28.8,
    },
    {
      name: "London",
      xval: "Mar.",
      yval: 39.3,
    },
    {
      name: "London",
      xval: "Apr.",
      yval: 81.4,
    },
    {
      name: "London",
      xval: "May",
      yval: 47,
    },
    {
      name: "London",
      xval: "Jun.",
      yval: 20.3,
    },
    {
      name: "London",
      xval: "Jul.",
      yval: 24,
    },
    {
      name: "London",
      xval: "Aug.",
      yval: 35.6,
    },
    {
      name: "Berlin",
      xval: "Jan.",
      yval: 12.4,
    },
    {
      name: "Berlin",
      xval: "Feb.",
      yval: 23.2,
    },
    {
      name: "Berlin",
      xval: "Mar.",
      yval: 34.5,
    },
    {
      name: "Berlin",
      xval: "Apr.",
      yval: 99.7,
    },
    {
      name: "Berlin",
      xval: "May",
      yval: 52.6,
    },
    {
      name: "Berlin",
      xval: "Jun.",
      yval: 35.5,
    },
    {
      name: "Berlin",
      xval: "Jul.",
      yval: 37.4,
    },
    {
      series: "Berlin",
      xval: "Aug.",
      yval: 42.4,
    },
  ],
};

// List Data view 2
export const listdata = [
  {
    title: "Ant Design Title 1",
    description: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
    description: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 3",
    description: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 4",
    description: "Ant Design Title 1",
  },
];
