import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { LinkPreview } from "../ui/link-preview";

interface ProjectCardProps {
  title: string;
  techStack: {
    frontend: string;
    backend: string;
    other: string;
  };
  gitLink: string;
  liveLink: string;
  descriptionPoints: string[];
}

export default function ProjectCard({ title, techStack, gitLink, liveLink, descriptionPoints }: ProjectCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="border rounded-md px-3 py-2 w-56 hover:translate-y-1 transition duration-150 group hover:bg-black/20 hover:shadow-md">
        <div className="flex gap-1">
        <LinkPreview url={liveLink} className="text-lg font-medium text-white flex gap-1">
          <h1 className="">{title}</h1>
          <div className="relative h-fit overflow-hidden cursor-pointer">
              <ArrowUpRight className="md:translate-y-full group-hover:-translate-y-0 transition-all duration-100 ease-out opacity-0 group-hover:opacity-100" onClick={onOpen}/>
          </div>
        </LinkPreview>{" "}
        </div>
        <h1 className="mt-1 font-normal">TechStack</h1>
          <li className="text-sm font-light">{techStack.frontend}</li>
          <li className="text-sm font-light">{techStack.backend}</li>
          <li className="text-sm font-light">{techStack.other}</li>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onClose} backdrop="blur" className="bg-black/10 backdrop-blur-lg text-white">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">More on {title}</ModalHeader>
          <ModalBody>
            {descriptionPoints.map((point, index) => (
              <p key={index}>{point}</p>
            ))}
          </ModalBody>
          <ModalFooter>
            
              <Link href={gitLink} target="_blank" rel="noopener noreferrer">
                <Button  variant="light"   className="flex gap-1 text-white items-center justify-center">
                    <IconBrandGithub/> Repo
                </Button>
              </Link>

              <Link href={liveLink} target="_blank" rel="noopener noreferrer" >
                <Button  className="flex gap-1 text-white items-center justify-center bg-blue-500 hover:bg-blue-600">
                  <ExternalLink/> Live
                </Button>
              </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}