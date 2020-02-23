import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import colors from "../constants/colors";


const projects = [{
  title: "@taystack/js-helpers",
  src: "https://raw.githubusercontent.com/taystack/js-helpers/master/docs/JsHelpers.png",
  link: "https://github.com/taystack/js-helpers",
  body: "Small JavaScript library with some helper functions that I find useful. This is a work in progress and contributions are encouraged.",
}, {
  title: "@taystack/use-timeout",
  src: "https://raw.githubusercontent.com/taystack/use-timeout/master/logo.png",
  link: "https://github.com/taystack/use-timeout",
  body: "React 16.8 Hook: Get a boolean value after an arbitrary timeout. Useful for rendering mounting components.",
}, {
  title: "@taystack/use-leet",
  src: "https://raw.githubusercontent.com/taystack/use-leet/master/logo.png",
  link: "https://github.com/taystack/use-leet",
  body: "React 16.8 Hook: Leet-ify your text with leet speak. React hook turns your given text value into 1337 SP34K.",
}];

const ProjectCard = ({ project }) => {
  const { title, src, link, body, } = project;
  // function handleClick() { window.open(link, "_blank"); }
  return (
    <div className="ProjectCard" style={{
      display: "flex",
      padding: 10,
      boxShadow: "0 0 1px 1px rgba(0,0,0,0.2)",
      flexGrow: 0,
      marginBottom: 15,
    }}>
      <div className="noMobile noTablett" style={{ opacity: 0.7, height: 100 }}>
        <Image src={src} style={{ maxWidth: 200, background: colors.white }} />
      </div>
      <div style={{ paddingLeft: 10, width: "100%" }}>
        <a href={link} target="_blank"><strong>{title}</strong></a>
        <code style={{ marginTop: 10 }}>{body}</code>
      </div>
    </div>
  );
}

const ProjectCards = ({ projects }) => {
  const cards = useMemo(() => projects.map(project => (<ProjectCard key={project.title} project={project} />)), [projects]);
  return (
    <div className="ProjectCards" style={{
      minHeight: "50vh",
      maxWidth: 1000,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: "0 5vw",
      boxSizing: "border-box",
    }}>
    <h2 style={{ textAlign: "center" }}>Some other projects...</h2>
      {cards}
    </div>
  );
};

ProjectCards.defaultProps = { projects };
ProjectCards.propTypes = {};

export default ProjectCards;
