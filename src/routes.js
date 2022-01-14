/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import ClassIcon from "@material-ui/icons/Class";
import PaymentIcon from '@mui/icons-material/Payment';
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
import Profile from "views/Student/Profile/Profile.js";
import Education from "views/Student/Education/Education.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import LessonProfle from "views/LessonProfile/LessonProfile.js"
import TableList from "views/UsersList/UsersList.js";
import LessonList from "views/LessonList/LessonList.js";
import Lessons from "views/Student/Lessons/Lessons.js";
import LoginAndRegister from "views/LoginAndRegister/LoginAndRegister";


// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout


const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "داشبورد",
  //   rtlName: "داشبورد",
  //   icon: Dashboard,
  //   component: RTLPage,
  //   layout: "",
  //   sidbarShow: true
  // },
  {
    path: "/login",
    name: "loginForm",
    rtlName: "ورود",
    icon: Person,
    component:LoginAndRegister,
    layout: "",
    sidbarShow:false

  },
  {
    path: "/profile",
    name: "پروفایل",
    rtlName: "پروفایل",
    icon: Person,
    component: Profile,
    layout: "",
    sidbarShow:true

  },
  {
    path: "/education",
    name: "آموزش",
    rtlName: "آموزش",
    icon: ClassIcon,
    component: Education,
    layout: "",
    sidbarShow:true

  },
  {
    path: "/lessons",
    name: "دروس",
    rtlName: "دروس",
    icon: ClassIcon,
    component: Lessons,
    layout: "",
    sidbarShow:true

  },

  // {
  //   path: "/userProfile/:id",
  //   name: "پروفایل",
  //   rtlName: "پروفایل",
  //   component: UserProfile,
  //   sidbarShow:false
  // },
  {
    path: "/lessonProfile/:id",
    name: " پروفایل درس",
    rtlName: " پروفایل درس",
    component: LessonProfle,
    sidbarShow:false
  },

  // {
  //   path: "/userList",
  //   name: "Table List",
  //   rtlName: "لیست کاربران",
  //   icon: PeopleAltIcon,
  //   component: TableList,
  //   layout: "",
  //   sidbarShow: true

  // },
  // {
  //   path: "/lessonList",
  //   name: "لیست دروس ",
  //   rtlName: "لیست دروس",
  //   icon: ClassIcon,
  //   component: LessonList,
  //   layout: '',
  //   sidbarShow: true

  // },
  // {
  //   path: "/financial",
  //   name: "مالی",
  //   rtlName: "مالی",
  //   icon: PaymentIcon ,
  //   component: LessonList,
  //   layout: '',
  //   sidbarShow: true

  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "",
  //   sidbarShow: true

  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "",
  //   sidbarShow: true

  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "",
  //   sidbarShow: true

  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "",
  //   sidbarShow: true

  // },
  // {
  //   path: "/",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "",
  //   sidbarShow: true

  // },
];

export default dashboardRoutes;
