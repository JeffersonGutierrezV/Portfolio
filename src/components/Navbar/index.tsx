import React from "react";

import styles from "./index.module.css";
import { CustomButton } from "../../ui/CustomButton";

export const Navbar: React.FC = () => {
  const pageSections = ["About", "Works", "Partners", "Contact"];

  return (
    <nav className={styles.navbar}>
      {pageSections.map((section: string) => (
        <CustomButton
          type="link"
          onClick={() => console.log(section)}
          label={section}
        />
      ))}
    </nav>
  );
};
