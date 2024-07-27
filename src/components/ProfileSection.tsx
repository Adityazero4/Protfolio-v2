"use client";
import Image from "next/image";
import React from "react";
import FadeBoundary from "./FadeBoundary";
import { DockDemo } from "./DockDemo";
import TypingAnimation from "./magicui/typing-animation";
import ShinyButton from "./magicui/shiny-button";

const ProfileSection = () => {
  return (
    <div className="w-full fixed top-0 left-0 lg:max-w-[450px] bg-background lg:flex h-dvh lg:z-[100000]">
      <div className="absolute top-0 left-0 w-full h-1/2 ">
        <Image loading="eager" src="/bgGroup.svg" layout="fill" alt="bg" />
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-background" />
        <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-background/50" />
      </div>
      <div className="absolute flex flex-col items-center top-0 left-0 w-full h-full pt-16 px-[15%]">
        <div className="w-3/5 max-w-52 mb-10 aspect-square relative rounded-full border-[3px] border-white/20 shadow-profile">
          <Image
            loading="eager"
            alt="photo"
            src={"/photoCircle.avif"}
            layout="fill"
          />
        </div>
        <h1 className="text-3xl mb-4 text-center w-full font-livvic text-textPrimary font-semibold">
          Aditya Jain
        </h1>
        <TypingAnimation
          className="text-xl mb-10 text-center w-full font-livvic text-textPrimary font-semibold"
          text="<FrontendEngineer/>"
          duration={150}
        />

        <DockDemo />

        <div className="w-full h-full flex-1 pt-10 gap-4 flex justify-center relative">
          <ShinyButton
            text="Resume"
            className="h-fit rounded-full px-5 py-2 text-primary text-sm font-semibold"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1h150C_6F7fOyt3Sn8mF2Fn-8x1Tqkl5B/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />

          <ShinyButton
            text="Hire Me!"
            className="h-fit rounded-full px-5 py-2 text-primary text-sm font-semibold"
            onClick={() => {
              document?.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
      <FadeBoundary width={"20%"} />
    </div>
  );
};

export default ProfileSection;
