import React, { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import CustomSection from "../../CustomSection";
import { Navbar } from "../../Navbar";

import styles from "./index.module.scss";
import { CustomStepper } from "../../../ui/CustomStepper";
import { ISection } from "../../Navbar/index.types";

export const MainPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("about");
  console.log("🚀 ~ file: index.tsx:13 ~ currentSection:", currentSection);

  const pageSections: ISection[] = [
    { label: "About", id: "about" },
    { label: "Works", id: "works" },
    { label: "Partners", id: "partners" },
    { label: "Contact", id: "contact" },
  ];

  const getStepper = () => {
    const currentStepperIndex = pageSections.findIndex(
      ({ id }) => id === currentSection
    );

    if (currentStepperIndex === pageSections.length - 1) {
      return { ...pageSections[0], isLastSection: true };
    } else {
      return { ...pageSections[currentStepperIndex + 1], isLastSection: false };
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
        <Navbar onSectionChange={setCurrentSection} sections={pageSections} />
      </div>
      <CustomSection id="about">About</CustomSection>
      <CustomSection id="works">Works</CustomSection>
      <CustomSection id="partners">Partners</CustomSection>
      <CustomSection id="contact">Contact</CustomSection>
      <div className={styles.stepper}>
        <CustomStepper
          step={{
            navigateTo: getStepper().id,
            auxiliaryLabel: `Go to ${getStepper().label}`,
            icon: getStepper().isLastSection ? (
              <UpOutlined />
            ) : (
              <DownOutlined />
            ),
          }}
        />
      </div>
    </div>
  );
};
