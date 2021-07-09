import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/search/:keyword",
  //   name: "Home",
  //   component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  // },
  // {
  //   path: "/page/:pageNumber",
  //   name: "Home",
  //   component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  // },
  // {
  //   path: "/search/:keyword/page/:pageNumber",
  //   name: "Home",
  //   component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  // },
  // {
  //   path: "/admin/userlist",
  //   name: "UserList",
  //   component: () =>
  //     import(/* webpackChunkName: "userlist" */ "../views/UserList.vue"),
  // },
  // {
  //   path: "/admin/user/:id/edit",
  //   name: "UserEdit",
  //   component: () =>
  //     import(/* webpackChunkName: "useredit" */ "../views/UserEdit.vue"),
  // },
  // {
  //   path: "/admin/orderlist",
  //   name: "OrderList",
  //   component: () =>
  //     import(/* webpackChunkName: "orderlist" */ "../views/OrderList.vue"),
  // },
  // {
  //   path: "/admin/productlist/:pageNumber",
  //   name: "ProductList",
  //   component: () =>
  //     import(/* webpackChunkName: "productlist" */ "../views/ProductList.vue"),
  // },
  // {
  //   path: "/admin/product/:id/edit",
  //   name: "ProductEdit",
  //   component: () =>
  //     import(/* webpackChunkName: "productedit" */ "../views/ProductEdit.vue"),
  // },
  {
    path: "/cart/:id?",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  // },
  {
    path: "/order",
    name: "Order",
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/Order.vue"),
  },
  // {
  //   path: "/payment",
  //   name: "Payment",
  //   component: () =>
  //     import(/* webpackChunkName: "payment" */ "../views/Payment.vue"),
  // },
  // {
  //   path: "/placeorder",
  //   name: "PlaceOrder",
  //   component: () =>
  //     import(/* webpackChunkName: "placeorder" */ "../views/PlaceOrder.vue"),
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: () =>
  //     import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () =>
  //     import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  // },
  // {
  //   path: "/shipping",
  //   name: "Shipping",
  //   component: () =>
  //     import(/* webpackChunkName: "shipping" */ "../views/Shipping.vue"),
  // },
  // {
  //   path: "/product/:id",
  //   name: "Product",
  //   component: () =>
  //     import(/* webpackChunkName: "product" */ "../views/Product.vue"),
  // },
  {
    path: "/product/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
