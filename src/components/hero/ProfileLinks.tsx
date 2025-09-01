import { Tooltip } from "@heroui/react"; 
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconDownload, 
  IconMail,
  IconBrandMedium 
} from "@tabler/icons-react";
import Link from "next/link";

export default function ProfileLinks() {
  return (
    <div className="flex gap-2 items-center">
      <Tooltip content="Read what i wrote in medium" placement="bottom">
        <Link
          href="https://medium.com/@mokshanirugutti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:translate-y-1 transition duration-150"
        >
          <IconBrandMedium />
        </Link>
      </Tooltip>

      <Tooltip content="Let's connect on LinkedIn" placement="bottom">
        <Link
          href="https://www.linkedin.com/in/moksha-nirugutti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:translate-y-1 transition duration-150"
        >
          <IconBrandLinkedin />
        </Link>
      </Tooltip>

      <Tooltip content="Check out my work in github" placement="bottom">
        <Link
          href="https://github.com/mokshanirugutti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:translate-y-1 transition duration-150"
        >
          <IconBrandGithub />
        </Link>
      </Tooltip>

      <Tooltip content="That's my resume" placement="bottom">
        <Link
          href="/MokshaNiruguttiResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:translate-y-1 transition duration-150"
        >
          <IconDownload />
        </Link>
      </Tooltip>

      <Tooltip content="I check mail regularly, you can drop one" placement="bottom">
        <Link
          href="mailto:mokshasai910@gmail.com?subject=From%20Portfolio%20Website"
          className="hover:translate-y-1 transition duration-150"
        >
          <IconMail />
        </Link>
      </Tooltip>
    </div>
  );
}
