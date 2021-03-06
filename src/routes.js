/*!

=========================================================
* Material Dashboard PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Dashboard from "views/Dashboard/Dashboard.jsx";
import LoginPage from "views/Pages/LoginPage";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";



var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Cars",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        name: "Try to put search here"
        // path: "/dashboard/chosen_car"
      },
      {
        name: "Car 1",
        path: "/dashboard/chosen_car1",
        layout: "/admin"
      },
      {
        name: "Car 2",
        path: "/dashboard/chosen_car2",
        layout: "/admin"
      },
      {
        name: "Car 3",
        path: "/dashboard/chosen_car3 ",
        layout: "/admin"
      },
    ]
  },
  {
    collapse: true,
    name: "Logout",
    state: "pageCollaspe",
    views: [
      {
        path: "/login-page",
        name: "logout",
        component: LoginPage,
        layout: "/auth"
      }
    ]
   }
];
export default dashRoutes;
