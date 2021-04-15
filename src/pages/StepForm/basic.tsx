import React from "react";
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormDateRangePicker,
} from "@ant-design/pro-form";
import ProCard from "@ant-design/pro-card";
import { message } from "antd";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const RuleRequired = {
  required: true,
};
const Options1 = [];

const OptionsRemark = [
  {
    value: "1",
    label: "策略一",
  },
  { value: "2", label: "策略二" },
];

const OptionsRemark2 = [
  {
    value: "1",
    label: "策略一",
  },
  { value: "2", label: "策略二" },
];

const OptionCbox1 = ["结构迁移", "全量迁移", "增量迁移", "全量校验"];
const OptionCbox2 = ["完整 LOB", "不同步 LOB", "受限制 LOB"];
export default () => {
  const onFinish = async (values) => {
    console.log(values);
    await waitTime(1000);
    message.success("提交成功");
    return true;
  };
  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        onFinish={onFinish}
        formProps={{
          validateMessages: {
            required: "此项为必填项",
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="创建实验"
          onFinish={onFinish}
        >
          <ProFormText
            name="name"
            label="实验名称"
            width="md"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[RuleRequired]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProFormDateRangePicker name="dateTime" label="时间区间" />
          <ProFormTextArea name="remark" label="备注" width="lg" placeholder="请输入备注" />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="设置参数"
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={OptionCbox1}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker name="datetime" label="记录保存时间" width="sm" />
            <ProFormCheckbox.Group name="checkbox" label="迁移类型" options={OptionCbox2} />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="发布实验">
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[RuleRequired]}
            options={["部署单元1", "部署单元2", "部署单元3"]}
          />
          <ProFormSelect
            label="部署分组策略"
            name="remark"
            rules={[RuleRequired]}
            initialValue="1"
            options={OptionsRemark}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            initialValue="2"
            options={OptionsRemark2}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
};
