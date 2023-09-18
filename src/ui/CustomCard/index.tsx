import React from "react";

import { CustomCardProps } from "./index.types";

import styles from "./index.module.scss";
import classnames from "classnames";

const CustomCard: React.FC<CustomCardProps> = ({ children, customStyles }) => {
  return (
    <div className={classnames(styles.cardContainer, customStyles)}>
      {children}
    </div>
  );
};

export default CustomCard;
