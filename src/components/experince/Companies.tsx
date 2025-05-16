import React , { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Code2Icon } from "lucide-react";

import { motion, AnimatePresence } from 'framer-motion';

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};



function AnimatedDescription({ description }: { description: string[] }) {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 pl-2 "
    >
      {description.map((text, index) => (
        <motion.li
          key={index}
          custom={index}
          variants={listItemVariants}
          className="relative pl-2 text-neutral-300/90 group"
        >
          
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="text-pretty  leading-relaxed tracking-wide text-sm/relaxed font-light py-2 px-4 rounded-xl border border-white/5 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm hover:bg-white/5 transition-colors"
          >
            {text}
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
}


interface ExperienceItem {
  id: number;
  title: string;
  subtitle: string;
  location : string;
  description: string[];
}


const data : ExperienceItem[] = [
  {
    id: 1,
    title: "Latracal Solutions",
    subtitle: "Full Stack Intern, March-2025 - Present,",
    location: "Bengaluru",
    description: [
      "Reduced image storage size by up to 60% by implementing Sharp for real-time image optimization.",
      "Improved user engagement and retention by implementing plan exhaustion popups, increasing user awareness",
      "Enhanced admin dashboard insights by adding daily and cumulative growth visualizations, enabling faster data-driven decisions and improving feature adoption by 30%",
      "Reduced build time by 40% and cut CPU/memory usage by 35% in production by re-engineering the template recommendation engine with pgVector in PostgreSQL.",
      "Integrated external platforms (Zid, Yampi, Haravan, Zendesk) using secure OAuth workflows, enabling seamless third-party service connectivity and improving system extensibility",
      "Developed custom ui libary for internal use, improving developer efficiency and consistency across next-js app (used for landing page) and react-app that is used for core product"
    ]
  },
  {
    id: 2,
    title: "KampKode",
    subtitle: "Full Stack Intern, July-2024 - Jan 2025,",
    location: "Remote",
    description: [
      "Led development of multiple client projects, utilizing React and Node.js",
      "Implemented responsive design principles, ensuring seamless experience across devices",
      "Collaborated with design team to optimize UX/UI workflows",
    ],
  },
  {
    id: 3,
    title: "FreeLance",
    subtitle: "Full Stack Developer, Feb - March-2024,",
    location: "Remote",
    description: [
      "Developed custom websites for small businesses using modern tech stacks",
      "Implemented SEO best practices resulting in improved client visibility",
      "Managed end-to-end project lifecycles from requirements gathering to deployment",
    ],
  },
];

export default function CompaniesComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const handleOpen = (experience : ExperienceItem ) => {
    setSelectedExperience(experience);
    onOpen();
  };

  return (
    <div className="mt-1 flex flex-col gap-1 items-start justify-start">
      {data.map((experience) => (
        <Button
          key={experience.id}
          onPress={() => handleOpen(experience)}
          className="hover:bg-transparent hover:opacity-100 data-[hover=true]:bg-transparent text-white py-10 hover:translate-x-2 transition-all duration-300 ease-in-out outline-none focus:outline-none w-full items-center justify-start "
          startContent={<Code2Icon />}
          variant="light"
          disableRipple={true}
        >
          <div className="flex flex-col gap-1 justify-start items-start">
            <div>{experience.title}</div>
            <div className="flex gap-1 flex-col md:flex-row items-start"> 

              <div className="text-neutral-400 text-sm">
                {experience.subtitle}
              </div>
              <div className="text-neutral-400 text-sm">
                {experience.location}
              </div>
            </div>
          </div>
        </Button>
      ))}

      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="bg-transparent backdrop-blur-xl shadow-2xl text-white border-l border-neutral-500 "> 
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                {selectedExperience?.title}
                <p className="text-neutral-400 text-sm font-normal">
                  {selectedExperience?.subtitle}
                </p>
              </DrawerHeader>
              <DrawerBody className="drawer-body">
              <AnimatePresence mode="wait">
    <motion.div
      key={selectedExperience?.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className=""
    >
         {selectedExperience && (
        <AnimatedDescription description={selectedExperience.description} />
      )}
    </motion.div>
  </AnimatePresence>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}