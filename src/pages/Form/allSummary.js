const Summary = {
  form: { collect_value: "onValuesChange" },
  item: {
    listen: "onChange",
    set_value: [
      "set default value with initialValues",
      "setFieldsValue dynamically",
      "dont use setState",
    ],
    dependencies: ["Used when there are dependencies between fields"],
    shouldUpdate: [
      "any Form update will cause the Form.Item to be re-rendered",
      "if it is a function, it will be called by form values update. Providing original values and current value to compare. This is very helpful for rendering additional fields based on values:",
    ],
  },
  layout: {
    type: {
      inline: "Put all in the same line",
      horizontal: "",
      vertical: "",
    },
    wrapperCol: ["控制input布局", "input controls", "same as with <Col>", "Form or item level"],

    labelCol: [
      "控制label布局",
      "Label layout",
      "same as with <Col>",
      "{span: 3, offset: 12} or sm: {span: 3, offset: 12}",
      "Form or item level",
    ],
  },
};

export { Summary };
