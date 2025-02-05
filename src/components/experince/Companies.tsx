

import {Accordion, AccordionItem} from "@heroui/react";
import { Code2Icon } from "lucide-react";

const MonitorMobileIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="24"
      role="presentation"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M10 16.95H6.21C2.84 16.95 2 16.11 2 12.74V6.74003C2 3.37003 2.84 2.53003 6.21 2.53003H16.74C20.11 2.53003 20.95 3.37003 20.95 6.74003"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 21.4699V16.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M2 12.95H10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.73999 21.47H9.99999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M22 12.8V18.51C22 20.88 21.41 21.47 19.04 21.47H15.49C13.12 21.47 12.53 20.88 12.53 18.51V12.8C12.53 10.43 13.12 9.83997 15.49 9.83997H19.04C21.41 9.83997 22 10.43 22 12.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.2445 18.25H17.2535"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};


export default function CompaniesComponent() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-normal text-white",
    trigger: "px-2 py-1 data-[hover=true]:bg-black/30 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small font-light px-4 leading-6",
    subtitle : "text-neutral-400 text-sm"
  };

  return (
    <Accordion
      className="p-2 flex flex-col gap-2 w-full bg-transparent text-white "
      itemClasses={itemClasses}
      showDivider={false}
    >
      <AccordionItem
        key="1"
        aria-label="Kamp Kode"
        startContent={<MonitorMobileIcon/>}
        subtitle="Full Stack Intern, July-2024"
        title="KampKode"
      >
        <li className="">Full-stack web application designed and implemented using React, Typescript, and Tailwind CSS, increasing user engagement by 30%.</li>
        <li>Designed responsive and user-friendly interfaces using UI frameworks such as Aceternity UI and Magic UI.</li>
        <li>Collaborated with cross-functional teams to align UI/UX designs with product goals, ensuring on-time project delivery, resulting in a 95% satisfaction rating.</li>

      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="FreeLance"
        startContent={<Code2Icon/>}
        subtitle="Full Stack developer, Feb to March-2024"
        title="FreeLance"
        className="mt-3 md:mt-0"
      >
        <li>Developed a highly customizable story editor for the film industry, enabling writers to efficiently create, store,
        and manage story drafts, improving productivity by 25%.</li>

        <li>Created custom scene presets to enhance storytelling workflows and integrated features like debouncing to
        efficiently save content</li>
      </AccordionItem>
    </Accordion>
  );
}
