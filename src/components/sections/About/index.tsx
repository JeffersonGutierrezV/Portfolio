import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import { CustomButton } from "../../../ui/CustomButton";
import CustomCard from "../../../ui/CustomCard";

import styles from "./index.module.scss";

interface IPersonalInfo {
  field: string;
  description: string;
}
interface ISocialLink {
  link: string;
  icon: React.ReactElement;
}

export const About: React.FC = () => {
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
      description: "(+593) 961 372685",
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

  return (
    <div className={styles.aboutContainer}>
      <CustomCard customStyles={styles.personalInfo}>
        <div className={styles.leftSection}>
          <div className={styles.photoSection}>
            <div className={styles.photo}>photo</div>
            <div className={styles.socialLinks}>
              {mediaList.map(({ link, icon }) => (
                <CustomButton icon={icon} href={link} key={link} />
              ))}
            </div>
          </div>
          <div className={styles.infoSection}>
            {personalInfo.map(({ field, description }) => (
              <div className={styles.secondaryCard}>
                <span className={styles.title}>{field}</span>
                <span className={styles.content}>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </CustomCard>
      <CustomCard customStyles={styles.skillInfo}>
        <div className={styles.asd}>
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
          {mediaList.map(({ link, icon }) => (
            <CustomButton icon={icon} href={link} key={link} />
          ))}
        </div>
      </CustomCard>
    </div>
  );
};
