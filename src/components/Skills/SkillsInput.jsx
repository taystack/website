import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import colors from "../../constants/colors";
import { NakedInput } from "../Input";
import Transition from "../Transition";
import { skillTags } from "../../constants/skills";


export function useSkillsMatched(value, usedTags = []) {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const tagMatches = [];
    skillTags.forEach(skillTag => {
      const skillMatchIndex = skillTag.toLowerCase().indexOf(value.toLowerCase());
      if (skillMatchIndex >= 0) {
        tagMatches.push(skillTag);
      }
      setMatches(tagMatches);
    });
  }, [value]);
  return [true, matches];
}

// import SkillTag from "./SkillTag";
export const SkillTag = ({
  name,
  onClick,
}) => (
  <Transition transition="fade" style={{
    color: colors.black,
    background: colors.grey,
  }}><div onClick={() => onClick(name)} className="SkillTag">{name}</div></Transition>
);

const SkillsInput = ({
  id,
  style,
  // tags,
  ...otherProps
}) => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const [hasMatch, tagMatches] = useSkillsMatched(value, tags);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      const newTags = [event.target.value, ...tags];
      setTags(newTags);
      setValue("");
    }
  };

  const handleRemove = tagName => {
    const index = tags.indexOf(tagName);
    const newTags = [];
    tags.forEach((name, i) => {
      if (i !== index) newTags.push(name);
    });
    setTags(newTags);
  };

  const handleAdd = tagName => {
    const newTags = [...tags, tagName];
    setTags([ ...tags, tagName ]);
  }

  return (
    <div className="SkillsInput" style={{ flexGrow: 1 }}>
      <div style={{
        fontSize: 20,
        padding: "10px 10px",
        border: `1px solid ${colors.grey}`,
        borderRadius: 2,
        background: colors.white,
        display: "flex",
        position: "relative",
        boxSizing: "border-box",
        margin: "0 10vw",
      }}>
        <NakedInput
          id="skills-input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{
            boxSizing: "border-box",
            border: "none",
            background: "transparent",
            flexGrow: 1,
            padding: 0,
            zIndex: 1,
          }}
        />
        {tags.length > 0 && tags.map(tagName =>
          <SkillTag key={tagName} name={tagName} onClick={handleRemove} />
        )}
      </div>
      <div style={{
        margin: "5vh 10vw",
        display: "flex",
      }}>
        {hasMatch && tagMatches.map(tagName =>
          <SkillTag key={tagName} name={tagName} onClick={handleAdd} />
        )}
      </div>
    </div>
  );
};

SkillsInput.propTypes = {
  tags: PropTypes.array,
};

SkillsInput.defaultProps = {
  tags: [],
};

export default connect()(SkillsInput);
