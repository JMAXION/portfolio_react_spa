import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import SectionTitle from "./SectionTitle";

export default function Footer() {
  const contactLink = [
    { href: "https://github.com/JMAXION", icon: faGithub },
    {
      href: "http://www.youtube.com/channel/UCjd6Hckk-0s7k903wkV3qrw",
      icon: faYoutube,
    },
  ];
  return (
    <div id="contact" className="section">
      <SectionTitle title="Let's talk" description="satgat981111@gmail.com" />
      <ul className="contact__links">
        {contactLink.map((obj) => (
          <li>
            <FooterContact href={obj.href} icon={obj.icon} />
          </li>
        ))}
      </ul>
      <p>&copy; Dream Software Engineer Hyunsu - All right reserved</p>
    </div>
  );
}

export function FooterContact({ href, icon }) {
  return (
    <a className="contact__link" href={href}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
