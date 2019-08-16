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
        path: "/dashboard/car1",
        name: "Car 1",
        layout: "/admin"
      },
      {
        path: "/dashboard/car2",
        name: "Car 2",
        layout: "/admin"
      },
      {
        path: "/dashboard/car3",
        name: "Car 3",
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
