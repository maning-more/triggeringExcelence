
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Course from "../../pages/Course";

import Home from "../../pages/Home";


export const routes = [
    {
        route: "/",
        component:Home,
      },
  {
    route: "/about",
    component:About,
  },
  {
    route: "/blog",
    component:Blog,
  },
  {
    route: "/contact",
    component:Contact,
  },
  {
    route: "/courses",
    component:Course,
  },
  
 
 
];
