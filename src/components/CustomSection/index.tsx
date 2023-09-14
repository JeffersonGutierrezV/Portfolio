import React from "react";

import { CustomSectionProps } from "./index.types";

import styles from "./index.module.scss";

const CustomSection: React.FC<CustomSectionProps> = ({ children, id }) => {
  return (
    <div className={styles.sectionContainer} id={id}>
      {children}
    </div>
  );
};

export default CustomSection;
