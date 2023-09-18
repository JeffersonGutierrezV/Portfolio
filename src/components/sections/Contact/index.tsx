import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import { CustomButton } from "../../../ui/CustomButton";

import styles from "./index.module.scss";

interface ISocialLink {
  link: string;
  icon: React.ReactElement;
}

export const Contact: React.FC = () => {
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

  return (
    <div className={styles.contactContainer}>
      <div className={styles.iconSection}>
        {mediaList.map(({ link, icon }) => (
          <CustomButton icon={icon} href={link} key={link} />
        ))}
      </div>
    </div>
  );
};
