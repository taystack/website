import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import colors from "../constants/colors";


const projects = [{
  title: "@taystack/js-helpers",
  src: "https://raw.githubusercontent.com/taystack/js-helpers/master/docs/JsHelpers.png",
  link: "https://github.com/taystack/js-helpers",
}, {
  title: "@taystack/use-leet",
  src: "https://raw.githubusercontent.com/taystack/use-leet/master/logo.png",
  link: "https://github.com/taystack/use-leet",
}, {
  title: "@taystack/use-timeout",
  src: "https://raw.githubusercontent.com/taystack/use-timeout/master/logo.png",
  link: "https://github.com/taystack/use-timeout",
}];

const ProjectCard = ({ project }) => {
  const { title, src, link } = project;
  function handleClick() { window.open(link, "_blank"); }
  return (
    <div className="ProjectCard" onClick={handleClick} style={{
      display: "flex",
      flexDirection: "column",
      padding: 10,
      boxShadow: "0 0 1px 1px rgba(0,0,0,0.2)",
      flexBasis: 300,
      flexGrow: 0,
    }}>
      {title}
      <div style={{ opacity: 0.7, }}>
        <Image src={src} style={{ maxHeight: 200, background: colors.white }} />
      </div>
    </div>
  );
}

const ProjectCards = ({ projects }) => {
  const cards = useMemo(() => projects.map(project => (<ProjectCard project={project} />)), [projects]);
  return (
    <div className="ProjectCards" style={{
      minHeight: "100vh",
      maxWidth: 1000,
      margin: "0 auto",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      justifyContent: "space-between",
    }}>
      {cards}
    </div>
  );
};

ProjectCards.defaultProps = { projects };
ProjectCards.propTypes = {};

export default ProjectCards;
