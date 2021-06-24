import { TabPage } from "../common/tab_page";
import { Summary } from "./allSummary";

import { Basic } from "./Basic";
const Pages = { Basic };

const IndexPage = () => {
  return <TabPage pages={Pages} summary={Summary} title="Try Form" />;
};

export default IndexPage;
