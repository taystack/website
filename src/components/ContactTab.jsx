import React, { useState } from "react";
import PropTypes from "prop-types";
import Random from "../helpers/Random";
import PropTypeHexFormat from "../helpers/PropTypeHexFormat";
import TabItem from "./TabItem";
import { tabConstant } from "../redux/Actions";


export const ContactTab = ({ tab, ...props }) => (
  <TabItem
    tab={tabConstant.contact}
    {...props}
  />
);

ContactTab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypeHexFormat,
  }),
};

export default ContactTab;
