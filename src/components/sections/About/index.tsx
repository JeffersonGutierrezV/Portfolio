import React, { useState } from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { SegmentedValue } from "antd/es/segmented";
import { Segmented } from "antd";

import { CustomButton } from "../../../ui/CustomButton";
import CustomCard from "../../../ui/CustomCard";
import profilePhoto from "../../../assets/images/profile-photo.jpeg";
import { CustomCarousel } from "../../../ui/CustomCarousel";
import { SkillCard } from "./common/SkillCard";

import styles from "./index.module.scss";

interface IPersonalInfo {
  field: string;
  description: string;
}
interface ISkills {
  label: string;
  value: string;
}
interface ISocialLink {
  link: string;
  icon: React.ReactElement;
}

export const About: React.FC = () => {
  const [selectedSkill, setSelectedSkills] = useState<string>("hardSkills");

  const mediaList: ISocialLink[] = [
    {
      link: "https://www.linkedin.com/in/jefferson-guti%C3%A9rrez-232a99bb/",
      icon: <LinkedinOutlined style={{ fontSize: "20px" }} />,
    },
    {
      link: "https://github.com/JeffersonGutierrezV",
      icon: <GithubOutlined style={{ fontSize: "20px" }} />,
    },
    {
      link: "https://www.instagram.com/fabriciogutierrezv/",
      icon: <InstagramOutlined style={{ fontSize: "20px" }} />,
    },
    {
      link: "https://wa.me/593961372685",
      icon: <WhatsAppOutlined style={{ fontSize: "20px" }} />,
    },
  ];

  const personalInfo: IPersonalInfo[] = [
    {
      field: "Email",
      description: "jeffersongutierrez890@hotmail.com",
    },
    {
      field: "Phone",
      description: "(+593) 961 372 685",
    },
    {
      field: "Date of birth",
      description: "April/10/1993",
    },
    {
      field: "Citizenship",
      description: "Ecuadorian",
    },
    {
      field: "Residence",
      description: "Quito, Ecuador",
    },
    {
      field: "Languages",
      description: "English(Intermediate), Spanish(Native)",
    },
  ];

  const skills: ISkills[] = [
    {
      value: "hardSkills",
      label: "Hard Skills",
    },
    {
      value: "softSkills",
      label: "Soft Skills",
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <CustomCard customStyles={styles.personalInfo}>
        <div className={styles.leftSection}>
          <div className={styles.photoSection}>
            <div className={styles.photoContainer}>
              <img src={profilePhoto} className={styles.photo} />
            </div>
            <div className={styles.socialLinks}>
              {mediaList.map(({ link, icon }) => (
                <CustomButton icon={icon} href={link} key={link} />
              ))}
            </div>
          </div>
          <div className={styles.infoSection}>
            {personalInfo.map(({ field, description }) => (
              <div
                className={styles.secondaryCard}
                key={description}
                title={description}
              >
                <span className={styles.title}>{field}</span>
                <span className={styles.content}>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </CustomCard>
      <CustomCard customStyles={styles.skillInfo}>
        <div className={styles.carousel}>
          <CustomCarousel
            slides={[
              <div className={styles.intro}>
                <code>
                  Hi, <strong>I'm &#60;Jefferson/&#62;</strong>, <br />a junior
                  software developer with over two years of experience
                  developing applications in React.
                </code>
                <CustomButton
                  label="Download Resume"
                  onClick={() => console.log("download cv")}
                  type="primary"
                />
              </div>,
              <div className={styles.skills}>
                <Segmented
                  className={styles.skillsTypeSelector}
                  options={skills}
                  value={selectedSkill}
                  onChange={(newValue: SegmentedValue) =>
                    setSelectedSkills(newValue as string)
                  }
                />
                {selectedSkill === "hardSkills" ? <SkillCard /> : <SkillCard />}
              </div>,
            ]}
          />
        </div>
      </CustomCard>
    </div>
  );
};
