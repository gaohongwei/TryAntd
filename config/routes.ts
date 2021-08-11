import { TryRouters } from "./routes_try";
import { PageContainer, ProCard, StatisticCard } from "./routes_layout";
import { ProForm, Form } from "./routes_form";
import { StepForm } from "./routes_step";
import { ProItem } from "./routes_description";

export default [
  Form,
  ProForm,
  StepForm,
  ProItem,
  StatisticCard,
  ProCard,
  PageContainer,
  TryRouters,
  {
    path: "/basic",
    name: "BasicReact",
    component: "./basic_react",
  },
  {
    path: "/user",
    layout: false,
    routes: [
      {
        path: "/user",
        routes: [
          {
            name: "login",
            path: "/user/login",
            component: "./user/Login",
          },
        ],
      },
    ],
  },
  {
    path: "/welcome",
    name: "welcome",
    icon: "smile",
    component: "./Welcome",
  },
  {
    path: "/admin",
    name: "admin",
    icon: "crown",
    access: "canAdmin",
    component: "./Admin",
    routes: [
      {
        path: "/admin/sub-page",
        name: "sub-page",
        icon: "smile",
        component: "./Welcome",
      },
    ],
  },
  {
    name: "list.table-list",
    icon: "table",
    path: "/list",
    component: "./TableList",
  },
  {
    path: "/",
    redirect: "/welcome",
  },
  {
    component: "./404",
  },
];
