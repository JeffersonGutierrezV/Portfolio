import React from "react";

import { Button } from "antd";
import { CustomButtonProps } from "./index.types";

import styles from "./index.module.scss";
import classnames from "classnames";

export const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  label,
  icon,
  onClick,
  customStyle,
  href,
}) => {
  const setClassNames = () => {
    return classnames(styles.customButton, customStyle, {
      [styles.primary]: type === "primary",
      [styles.link]: type === "link",
      [styles.icon]: icon,
    });
  };

  return (
    <Button
      onClick={onClick}
      type={type}
      icon={icon ? icon : null}
      className={setClassNames()}
      target={href && "_blank"}
      href={href && href}
    >
      {label ? label : null}
    </Button>
  );
};
