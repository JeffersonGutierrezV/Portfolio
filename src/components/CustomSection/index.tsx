import React from "react";

import { CustomSectionProps } from "./index.types";

import styles from "./index.module.scss";

export const CustomSection: React.FC<CustomSectionProps> = ({
  children,
  id,
}) => {
  return (
    <div className={styles.sectionContainer} id={id}>
      {children}
    </div>
  );
};
