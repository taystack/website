import React, { useState } from "react";
import PropTypes from "prop-types";
import Random from "../../helpers/Random";
import PropTypeHexFormat from "../../helpers/PropTypeHexFormat";
import TabItem from "../TabItem";
import { tabConstant } from "../../redux/Actions";


export const SkillsTab = ({ ...props }) => (
  <TabItem
    tab={tabConstant.skills}
    {...props}
  />
);

export default SkillsTab;
