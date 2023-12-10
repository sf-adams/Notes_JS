export class MyApp {
  static routes = [
    {
      path: "",
      component: () => import("./pages/home-page"),
      id: "Home",
      title: "Home",
    },
    {
      path: "/products",
      component: () => import("./pages/products-page"),
      id: "Products",
      title: "Products",
    },
    {
      path: "/customers",
      component: () => import("./pages/customers-page"),
      id: "Customers",
      title: "Customers",
    },
    {
      path: "/news",
      component: () => import("./pages/news-page"),
      id: "News",
      title: "News",
    },
    {
      path: "/about",
      component: () => import("./pages/about-page"),
      id: "About",
      title: "About",
    },
    {
      path: "/contact",
      component: () => import("./pages/contact-page"),
      id: "ContactPage",
      title: "Contact Page",
    },
  ];

  private logo = "../img/logo.png";

  private links = [
    {path: "/", name: "Home"},
    {path: "/products", name: "Products & Services"},
    {path: "/customers", name: "Our Customers"},
    {path: "/news", name: "News & Events"},
    {path: "/about", name: "About Us"},
  ]
}
