import React from "react";
import { Link } from "react-scroll";

import { CustomStepperProps } from "./index.types";

import styles from "./index.module.scss";

export const CustomStepper: React.FC<CustomStepperProps> = ({ step }) => {
  const { navigateTo, auxiliaryLabel, icon } = step;
  return (
    <div className={styles.step} key={navigateTo}>
      <span className={styles.auxiliaryLabel}>{auxiliaryLabel}</span>
      <Link
        smooth
        to={navigateTo}
        spy
        className={styles.jumpButton}
        duration={250}
      >
        {icon}
      </Link>
    </div>
  );
};
