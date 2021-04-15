const ProForm = {
  path: "/ProForm",
  name: "ProForm",
  icon: "smile",
  routes: [
    { name: "Login", path: "./login", component: "./ProForm/login" },
    { name: "Basic1", path: "./basic1", component: "./ProForm/basic1" },
    { name: "FormLayout", path: "./layout", component: "./ProForm/form_layout" },
    { name: "FormFields", path: "./form_fields", component: "./ProFormFields/basic1" },
  ],
};

export { ProForm };
