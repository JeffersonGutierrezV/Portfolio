import React from "react";

import { Button } from "antd";

import styles from "./index.module.css";

interface CustomButtonProps {
  type?: "normal" | "link" | "icon";
  label?: string;
  onClick: () => void;
  icon?: React.ReactElement;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  type = "normal",
  label,
  icon,
  onClick,
}) => {
  const getButton = () => {
    switch (type) {
      case "normal":
        return (
          <Button onClick={onClick} type="primary">
            {label}
          </Button>
        );
      case "link":
        return (
          <Button onClick={onClick} type="link">
            {label}
          </Button>
        );
      case "icon":
        return <Button onClick={onClick} icon={icon} className={styles.icon} />;
    }
  };
  return <div className={styles.customButton}>{getButton()}</div>;
};
