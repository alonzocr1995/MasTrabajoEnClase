import React, { useEffect, useRef, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";

const Layout: React.FC = () => {
  const refElement = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (refElement.current !== undefined) {
        if (refElement!.current!.getBoundingClientRect().top < -100) {
          console.log("se paso");
          setScrolled(true);
        } else {
          console.log("todavia no");
          setScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refElement, setScrolled]);
  return (
    <div>
      <div ref={refElement}>
        <Nav />
        <p>Scrolled: {scrolled}</p>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-old">
          <Redirect to="/about" />
          <p>how to redirect</p>
        </Route>
        <Route exact path="/about/:sectionID">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
