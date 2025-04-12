

import {Accordion, AccordionItem} from "@heroui/react";
import { Code2Icon } from "lucide-react";


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
      className="p-2 flex flex-col gap-4 w-full bg-transparent text-white "
      itemClasses={itemClasses}
      showDivider={false}
    >
      <AccordionItem
        key="1"
        aria-label="Latracal Solutions"
        startContent={<Code2Icon/>}
        subtitle="Full Stack Intern, March-2025 - Present | Bangalore"
        title="Latracal Solutions"
      >
        <li className="">Reduced image storage size by up to 60% by implementing Sharp for real-time image optimization.</li>
        <li>Improved user engagement and retention by implementing plan exhaustion popups, increasing user awareness</li>
        <li>Enhanced admin dashboard insights by adding daily and cumulative growth visualizations, enabling faster
        data-driven decisions and improving feature adoption by 30%.</li> 
        <li>Reduced build time by 40% and cut CPU/memory usage by 35% in production by re-engineering the template
        recommendation engine with pgVector in PostgreSQL.</li>
        <li>Integrated external platforms (Zid, Yampi, Haravan, Zendesk) using secure OAuth workflows, enabling seamless
        third-party service connectivity and improving system extensibility</li>


      </AccordionItem>

      <AccordionItem
        key="2"
        aria-label="KampKode"
        startContent={<Code2Icon/>}
        subtitle="Full Stack Intern, July-2024 - Jan 2025 | Remote"
        title="KampKode"
      >
        <li className="">Full-stack web application designed and implemented using React, Typescript, and Tailwind CSS, increasing user engagement by 30%.</li>
        <li>Designed responsive and user-friendly interfaces using UI frameworks such as Aceternity UI and Magic UI.</li>
        <li>Collaborated with cross-functional teams to align UI/UX designs with product goals, ensuring on-time project delivery, resulting in a 95% satisfaction rating.</li>

      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="FreeLance"
        startContent={<Code2Icon/>}
        subtitle="Full Stack Developer, Feb - March-2024 | Remote "
        title="FreeLance"
        
      >
        <li>Developed a highly customizable story editor for the film industry, enabling writers to efficiently create, store,
        and manage story drafts, improving productivity by 25%.</li>

        <li>Created custom scene presets to enhance storytelling workflows and integrated features like debouncing to
        efficiently save content</li>
      </AccordionItem>
    </Accordion>
  );
}
