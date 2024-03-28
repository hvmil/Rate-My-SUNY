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
    <nav className="flex items-center py-10 px-6 relative mb-8 lg:mb-[8rem] gap-5 w-full justify-end">
      <a href="" target="_blank">
        <h1 className="top-[4rem] left-4 text-2xl lg:text-7xl font-bold text-stardust drop-shadow-test font-dealerplate absolute lg:-left-20 -rotate-[8deg] lg:top-[4rem] underline underline-offset-8">
          Rate My SUNY📚
        </h1>
      </a>
      <div className="flex items-center gap-5 justify-end">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a target="_blank" key={index} href={social.link}>
              <Icon className="w-6 h-6 hover:scale-125 transition-all fill-stardust" />
            </a>
          );
        })}
      </div>
      <div className="bg-black px-3 py-1 rounded-full border-zinc-900 border-2 hover:border-green-400 transition-all">
        <a href="" className="text-stardust uppercase font-bold tracking-wide">
          Sign In
        </a>
      </div>
      {/* <div className="bg-stardust px-3 py-1 rounded-full hover:scale-[1.1] transition-all">
        <a href="" className="text-black uppercase font-bold tracking-wide">
          Sign In
        </a>
      </div> */}
    </nav>
  );
}
