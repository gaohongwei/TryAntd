import { Tabs } from "antd";
import { InfiniteLoading } from "./InfiniteLoading";
import { CommonTabs } from "../common/CommonTabs";
import "./styles.css";

const tabConfig = [
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
