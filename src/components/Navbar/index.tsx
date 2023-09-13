import React from "react";
import { Link } from "react-scroll";

import { NavbarProps } from "./index.types";

import styles from "./index.module.scss";

export const Navbar: React.FC<NavbarProps> = ({
  onSectionChange,
  sections,
}) => {
  return (
    <div className={styles.navbar}>
      <div>logo</div>
      <div className={styles.menu}>
        {sections.map(({ label, id }) => (
          <Link
            smooth
            key={id}
            to={id}
            spy
            className={styles.dot}
            activeClass={styles.selected}
            onSetActive={() => onSectionChange(id)}
            duration={250}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className={styles.menuIcon}>
        {sections.map(({ label, id }, index) => (
          <div id={`test-${index.toString()}`} key={id}>
            <Link
              smooth
              to={`test-${index.toString()}`}
              spy
              className={styles.dot}
              activeClass={styles.selected}
              onSetActive={() => onSectionChange(id)}
              duration={250}
              horizontal={true}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
