"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, ExternalLinkIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export default function AllProjects() {
  const [step, setStep] = useState(1);

  const stepContent = [
    {
      title: "Eventer",
      description: "Built with React, TypeScript, Express, MongoDB to manage events. Allows users to create, update, and delete events. User can join attend event and attendes data will get updated realtime using websockets",
      repo : "https://github.com/mokshanirugutti/eventManagementApp",
      live : "https://litttleeeventts.netlify.app/",
      image:"/eventer.webp"
      
    },
    {
      title: "StudentBase",
      description:
      "A WebApp built using React,TypeScript,Firebase to store the data of students. With dashboard for managing the data.",
      repo : "https://github.com/mokshanirugutti/studentBase",
      live : "https://studentbase.netlify.app/",
      image:"/studentBase.webp"

    },
    {
      title: "Streak Station",
      description:
        "A custom built chorme extension that will track streaks for Leetcode, Github, highlights today contribution so that you can keep track of your progress.",
      repo : "https://github.com/mokshanirugutti/streakStation",
      image:"/streakStation.webp"
    },

  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) setStep(1);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white text-black ">View All</Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0 [&>button:last-child]:text-white bg-transparent text-white backdrop-blur-xl">
        <div className="p-2">
          <Image
            className="w-full rounded-lg"
            src={stepContent[step - 1].image}
            width={402}
            height={236}
            alt="Project Screenshot"
          />
        </div>
        <div className="space-y-6 px-6 pb-6 pt-3">
          <DialogHeader>
            <div className="flex gap-1">
              <DialogTitle className="tracking-wide">{stepContent[step - 1].title}</DialogTitle>
              <Link href={stepContent[step - 1].repo} 
              target="_blank" rel="noopener noreferrer" 
              className="scale-80 hover:scale-90 transition duration-150 cursor-pointer"
              >
                <IconBrandGithub/>
              </Link>
              {stepContent[step - 1].live && (<Link href={stepContent[step - 1].live || ''}
               
              target="_blank" rel="noopener noreferrer" 
              className="scale-80 hover:scale-90 transition duration-150 cursor-pointer"
              >
                <ExternalLinkIcon/>
              </Link>)
              }
            </div>
            <DialogDescription>{stepContent[step - 1].description}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center space-x-1.5 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full bg-white",
                    index + 1 === step ? "bg-white" : "opacity-20",
                  )}
                />
              ))}
            </div>
            <DialogFooter>
              {step < totalSteps ? (
                <Button className="group" type="button" onClick={handleContinue}>
                  Next
                  <ArrowRight
                    className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button type="button">Close</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
