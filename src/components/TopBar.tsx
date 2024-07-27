"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TopBar() {
  const tabs = [
    {
      title: "About",
      value: "about",
      onclick: () => {
        document?.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      },
    },
    {
      title: "Skills",
      value: "skills",
      onclick: () => {
        document?.getElementById("skills")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      },
    },
    {
      title: "Experience",
      value: "experience",
      onclick: () => {
        document?.getElementById("experience")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      },
    },
    {
      title: "Projects",
      value: "projects",
      onclick: () => {
        document?.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Resume",
      value: "resume",
      onclick: () => {
        window.open(
          "https://drive.google.com/file/d/1h150C_6F7fOyt3Sn8mF2Fn-8x1Tqkl5B/view?usp=sharing",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
    {
      title: "Hire Me!",
      value: "hire",
      onclick: () => {
        document?.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
  ];

  return (
    <header className="sticky z-50 overflow-x-auto lg:overflow-visible bg-background lg:px-[20%] px-5  [scrollbar-width:none] font-semibold flex gap-5 text-textSecondary items-center mt-5 lg:mt-10 top-0 left-0 w-full min-h-16">
      <Tabs
        tabs={tabs}
        tabClassName="cursor-pointer min-w-fit py-2 px-6 text-sm bg-textSecondary/20 text-textPrimary/50 rounded-full"
      />
      <div className="absolute hidden lg:flex top-full min-h-12 w-full left-0 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute hidden lg:flex top-full min-h-12 w-full left-0 bg-gradient-to-b from-background to-transparent"></div>
    </header>
  );
}
