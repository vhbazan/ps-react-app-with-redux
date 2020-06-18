import React from "react";
import { NavLink } from "react-router-dom";
import Homepage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import CoursePage from "../courses/CoursePage";

const Header = () => {
  const activeStyle = {
    color: "#F15B2A"
  };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} component={Homepage} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle} component={CoursePage}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle} component={AboutPage}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
