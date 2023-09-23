import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";

import { NavbarProps } from "./index.types";
import { Home } from "../icon";

import styles from "./index.module.scss";

export const Navbar: React.FC<NavbarProps> = ({
  onSectionChange,
  sections,
  currentSection,
}) => {
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentSection]);

  return (
    <div className={styles.navbar}>
      <Home />
      <div className={styles.desktopMenu}>
        {sections.map(({ label, id }) => (
          <Link
            smooth
            key={id}
            to={id}
            spy
            className={styles.item}
            activeClass={styles.selected}
            onSetActive={() => onSectionChange(id)}
            duration={250}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className={styles.mobileMenu}>
        {sections.map(({ label, id }) => (
          <div
            key={id}
            ref={currentSection === id ? ref : null}
            className={styles.menu}
          >
            <Link
              smooth
              to={id}
              spy
              activeClass={styles.selected}
              className={styles.innerMenu}
              onSetActive={() => onSectionChange(id)}
              duration={250}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
