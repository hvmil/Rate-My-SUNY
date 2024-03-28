import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function () {
  const socials = [
    {
      link: "https://www.linkedin.com/in/hamil-dimapanat-1b6057167/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/hvmil",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://www.instagram.com/blackcherryseltzer.jpg/",
      label: "Instagram",
      icon: SiInstagram,
    },
  ];
  return (
    <nav className="flex flex-col justify-between items-center py-6 px-6">
      <h1 className="text-sm text-black font-dealerplate mb-3 mt-2">
        Rate My SUNY.
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a target="_blank" key={index} href={social.link}>
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
