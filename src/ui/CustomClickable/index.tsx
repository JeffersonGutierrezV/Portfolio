import React from "react";
import classnames from "classnames";

import { CustomClickableProps } from "./index.types";

import styles from "./index.module.scss";

export const CustomClickable: React.FC<CustomClickableProps> = ({
  children,
  link,
  classNames,
  onClick,
}) => {
  const getClassNames = () => classnames(classNames, styles.container);

  return (
    <a
      onClick={onClick}
      href={link}
      target="_blank"
      rel="noreferrer"
      className={getClassNames()}
    >
      {children}
    </a>
  );
};
