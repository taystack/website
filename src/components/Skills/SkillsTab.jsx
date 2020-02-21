import React from "react";
import TabItem from "../TabItem";
import { tabConstant } from "../../redux/Actions";


export const SkillsTab = ({ ...props }) => (
  <TabItem
    tab={tabConstant.skills}
    {...props}
  />
);

export default SkillsTab;
