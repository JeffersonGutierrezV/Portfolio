import React from "react";

import { CustomSectionProps } from "./index.types";

import styles from "./index.module.scss";
import { Element } from "react-scroll";

const CustomSection: React.FC<CustomSectionProps> = ({ children, id }) => {
  return (
    <Element className={styles.sectionContainer} name={id}>
      {children}
    </Element>
  );
};

export default CustomSection;
