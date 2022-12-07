import React from "react";
import LinkTreeButton from "../../components/LinkTreeButton/LinkTreeButton";
import './LinkTree.css'

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
    url: "https://www.instagram.com/taheeraahmed",
    icon: "instagram",
  },
  {
    name: "Email",
    url: "mailto:taheera@hotmail.com",
    icon: "email",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/taheera-ahmed",
    icon: "linkedin",
  },
];

const LinkTree = () => {
  return (
    <div className="link-tree">
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
