import React from "react";

import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="jumbotron">
    <h1>PS Admin</h1>
    <p>React, Redux Course</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);

export default Homepage;
