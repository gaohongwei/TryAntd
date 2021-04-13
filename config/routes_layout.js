const PageContainer = {
  path: "/PageContainer",
  name: "PageContainer",
  icon: "smile",
  routes: [
    { name: "Basic1", path: "./basic1", component: "./PageContainer/basic1" },
    { name: "Basic2", path: "./basic2", component: "./PageContainer/basic2" },
  ],
};

const ProCard = {
  path: "/ProCard",
  name: "ProCard",
  icon: "smile",
  routes: [{ name: "Basic1", path: "./basic1", component: "./ProCard/basic1" }],
};

const StatisticCard = {
  path: "/StatisticCard",
  name: "StatisticCard",
  icon: "smile",
  routes: [{ name: "Basic1", path: "./basic1", component: "./StatisticCard/basic1" }],
};

export { PageContainer, ProCard, StatisticCard };
