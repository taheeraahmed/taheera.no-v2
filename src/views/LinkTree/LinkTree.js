import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import LinkTreeButton from "../../components/LinkTreeButton/LinkTreeButton";
import "./LinkTree.css";

const links = [
  {
    name: "Github",
    url: "https://www.github.com/taheeraahmed",
    icon: "github",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@taheera.py",
    icon: "tiktok",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/taheera.py",
    icon: "instagram",
  },
  {
    name: "Email",
    url: "mailto:taheera@hotmail.com",
    icon: "email",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/taheera-ahmed-997750158/",
    icon: "linkedin",
  },
];

const LinkTree = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const picture = {
    pinkOrangeTheme: require("../../assets/images/meg_1.jpg").default,
    blueGreenTheme: require("../../assets/images/meg_2.jpg").default,
  };
  return (
    <div className="link-tree">
      <div>
        <img
          alt="taheera ahmed"
          src={picture[themeContext.name]}
          style={{
            width: "60%",
            borderRadius: "50%",
            boxShadow: themeContext.boxShad,
          }}
        />
      </div>
      <h3 style={{ fontSize: "22pt", margin: 8 }}>Taheera Ahmed</h3>
      <p
        style={{
          color: themeContext.footerText,
          fontSize: "12pt",
          paddingBottom: 8,
          lineHeight: "1.5",
        }}
      >
        {t("linktree.bio")}{" "}
      </p>
      {links.map((link) => (
        <LinkTreeButton
          name={link.name}
          url={link.url}
          icon={link.icon}
          key={link.name}
        />
      ))}
    </div>
  );
};

export default LinkTree;
