export class MyApp {
  static routes = [
    {
      path: "",
      component: () => import("./components/home-page"),
      id: "Home",
      title: "Home",
    },
    {
      path: "",
      component: () => import("./components/contact-page"),
      id: "Home",
      title: "Home",
    },
    {
      path: "",
      component: () => import("./components/home-page"),
      id: "Home",
      title: "Home",
    },
    {
      path: "",
      component: () => import("./components/home-page"),
      id: "Home",
      title: "Home",
    },
  ];
}
