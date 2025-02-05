import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockComponent() {
  const links = [
    
    {
      icon: (
        <IconBrandX className="h-full w-full " />
      ),
      href: "#",
    },
    {
      icon: (
        <IconBrandLinkedin className="h-full w-full " />
      ),
      href: "#",
    },
    {
      icon: (
        <IconBrandGithub className="h-full w-full " />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full ">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
