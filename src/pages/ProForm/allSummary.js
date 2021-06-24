const Summary = {
  initialValues: "initialValues for form",
  "ProForm.Group": "put multiple in one line",

  input: ["ProFormText", "ProFormSelect"],

  attributes: {
    name: ["common var", "can be nested, {['contract', 'name']}"],
    width: "md,sm,xs",
    tooltip: "Help",
    show: "readonly,disabled",
    other: "label,placeholder",
  },
  layout: {},

  submitter: "Can define multiple buttons",
  formRef: ["formRef?.current?.getFieldValue('company')", "formRef?.current?.setFieldsValue"],
  form_level: {
    layout: "horizontal",
    labelCol: "",
  },
};

export { Summary };
