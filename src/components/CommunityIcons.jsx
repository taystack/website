import React from "react";
import Button from "./Button";
import colors from "../constants/colors";
import { IconWrapper, Npm, Github, StackOverflow, Email } from "./SocialIcons";


export const CommunityIcons = ({
  background,
  color,
}) => (
  <div className="CommunityIcons" style={{ display: "flex", flexDirection: "column" }}>
    <div className="card" style={{ display: "flex", cursor: "pointer" }}>
      {[
        [Npm, colors.red],
        [Github, colors.blue],
        [StackOverflow, colors.orange],
        [Email, colors.purple],
      ].map(([Icon, background], i) => (
        <IconWrapper className="MergeIcon hoverAppear moreOpacity" key={Icon} style={{
          background,
        }}>
          <Icon />
        </IconWrapper>
      ))}
    </div>
    <div className="card" style={{ display: "flex", cursor: "pointer" }}>
    </div>

  </div>
);

export default CommunityIcons;
