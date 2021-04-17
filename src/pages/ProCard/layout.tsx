import React from "react";
import ProCard from "@ant-design/pro-card";

export default () => {
  return (
    <ProCard>
      <ProCard title="默认尺寸" tooltip="这是提示" style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard title="小尺寸卡片" tooltip="这是提示" style={{ width: 300 }} size="small">
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </ProCard>
  );
};
