import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
  ],
});

export default router;
