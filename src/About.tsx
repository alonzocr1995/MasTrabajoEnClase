import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";

const About: React.FC = () => {
  const history = useHistory();
  const route = history.location.pathname;

  const { sectionID } = useParams<{ sectionID: string }>();

  return (
    <div>
      Welcome to About
      <p>{route}</p>
      <p>{sectionID}</p>
      <button>
        <Link to="/contact">go to contact</Link>
      </button>
    </div>
  );
};

export default About;
