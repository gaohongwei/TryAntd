import React from "react";
import ProForm, {
  ProFormSwitch,
  ProFormText,
  ProFormRadio,
  ProFormCheckbox,
  ProFormRate,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormDateTimePicker,
  ProFormSlider,
  ProFormDateTimeRangePicker,
  ProFormDateRangePicker,
  ProFormUploadButton,
  ProFormUploadDragger,
  ProFormFieldSet,
  ProFormTimePicker,
} from "@ant-design/pro-form";
import Mock from "mockjs";

import {
  SelectSimple,
  SelectWithRequest,
  SelectWitnEnum,
  SelectNoSearch,
  SelectCountry,
  SelectWithApi,
  SelectMultiple,
} from "./widget_select";

import { RadioH } from "./widget_radio";
const Demo = () => {
  const initialValues = {
    "input-number": 3,
    "checkbox-group": ["A", "B"],
    rate: 3.5,
    name: "qixian",
    radio: "a",
    "radio-button": "a",
  };
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <ProForm
        layout="horizontal"
        name="validate_other"
        initialValues={initialValues}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
        onFinish={async (value) => console.log(value)}
      >
        <ProFormText width="md" name="name" label="name" />
        <SelectCountry />
        <SelectWithApi />
        <SelectNoSearch />
        <ProForm.Group>
          <SelectSimple />
          <SelectWithRequest />
          <SelectWitnEnum />
        </ProForm.Group>

        <SelectMultiple />
        <ProFormDigit label="InputNumber" name="input-number" width="sm" min={1} max={10} />
        <ProFormSwitch name="switch" label="Switch" />
        <ProFormSlider
          name="slider"
          label="Slider"
          marks={{
            0: "A",
            20: "B",
            40: "C",
            60: "D",
            80: "E",
            100: "F",
          }}
        />
        <RadioH direction="abc" />
        <RadioH direction="vertical" />
        <RadioH direction="vertical" radioType="button" />

        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={["A", "B", "C", "D", "E", "F"]}
        />
        <ProFormRate name="rate" label="Rate" />
        <ProFormUploadButton
          name="upload"
          label="Upload"
          max={2}
          action="/upload.do"
          extra="longgggggggggggggggggggggggggggggggggg"
        />
        <ProFormFieldSet
          name="list"
          label="????????????"
          transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>
        <ProForm.Group title="??????????????????">
          <ProFormDatePicker name="date" label="??????" />
          <ProFormTimePicker name="time" label="??????" />
          <ProFormTimePicker.RangePicker name="timeRange" label="????????????" />
          <ProFormDatePicker.Week name="dateWeek" label="???" />
          <ProFormDatePicker.Month name="dateMonth" label="???" />
          <ProFormDatePicker.Quarter name="dateQuarter" label="??????" />
          <ProFormDatePicker.Year name="dateYear" label="???" />
          <ProFormDateTimePicker name="dateTime" label="????????????" />
          <ProFormDateRangePicker name="dateRange" label="????????????" />
          <ProFormDateTimeRangePicker name="dateTimeRange" label="??????????????????" />
        </ProForm.Group>
        <ProFormUploadDragger max={4} label="Dragger" name="dragger" />
      </ProForm>
    </div>
  );
};

export default Demo;
