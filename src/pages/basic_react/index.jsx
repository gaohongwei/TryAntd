import { Tabs } from "antd";
import { CommonTabs } from "COM/CommonTabs";
import "./styles.css";
import { InfiniteLoading } from "./InfiniteLoading";
import { CssPage } from "./CssPage";

const tabConfig = [
  {
    name: "CssPage",
    child: <CssPage />,
  },
  {
    name: "InfiniteLoading",
    child: <InfiniteLoading />,
  },
];

const { TabPane } = Tabs;
const BasicReact = () => {
  return <CommonTabs tabConfig={tabConfig} />;
};

export default BasicReact;
