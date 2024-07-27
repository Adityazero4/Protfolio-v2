import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { SOCIALS } from "@/utils/constants";
import Image from "next/image";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        className="w-full flex flex-wrap justify-center items-center border-none gap-5 mt-0 p-0"
      >
        {SOCIALS.map((social) => (
          <DockIcon key={social.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "min-w-10 relative overflow-hidden border-2 border-black/10 aspect-square rounded-full"
                  )}
                >
                  <Image
                    src={social.icon || ""}
                    alt={social.name.toLocaleLowerCase()}
                    loading="eager"
                    className={`${social.name === "LinkedIn" && "scale-125"}`}
                    layout="fill"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
