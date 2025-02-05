import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function ProfileLinks() {
    return <div className="flex gap-2 items-center">
        <Link href="https://www.linkedin.com/in/moksha-nirugutti" target="_blank" rel="noopener noreferrer" >
            <IconBrandLinkedin/>
        </Link>
        <Link href="https://github.com/mokshanirugutti" target="_blank" rel="noopener noreferrer" >
            <IconBrandGithub/>
        </Link>
        <Link href="/MokshaNiruguttiResume.pdf" target="_blank" rel="noopener noreferrer" >
            <IconDownload/>
        </Link>
        <Link href="mailto:mokshasai910@gmail.com?subject=From%20Portfolio%20Website">
            <IconMail/>
        </Link>
        
    </div>;
}