import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import CompaniesComponent from "./Companies";
import { BracesIcon, Database, LibraryBigIcon, SquareTerminalIcon } from "lucide-react";

export default function Experience() {
    return (
        <div className="mt-2">
            <div className="flex w-full flex-col" >
                <Tabs aria-label="Options" variant="light">
                    <Tab key="work" title="Work" className="font-medium">
                        <Card className="bg-transparent shadow-none" >
                            <CardBody className="-mt-4">
                                <CompaniesComponent />
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Skills" title="Skills" className="font-medium">
                        <Card className="bg-transparent shadow-none text-white font-normal">
                            <CardBody className="font-light">
                                <li className="flex gap-2 py-1 items-center"><span className="flex gap-1 items-center text-neutral-300"><BracesIcon /> Languages</span> : Python, JavaScript, TypeScript, HTML, CSS</li>
                                <li className="flex gap-2 py-1 items-center"><span className="flex gap-1 items-center text-neutral-300"><LibraryBigIcon />Technologies</span> : React, Node, Next.JS, Django, Express</li>
                                <li className="flex gap-2 py-1 items-center"><span className="flex gap-1 items-center text-neutral-300"><Database /> Databases</span> : SQL, PostgreSQL, MongoDB, Firebase</li>
                                <li className="flex gap-2 py-1 items-center"><span className="flex gap-1 items-center text-neutral-300"><SquareTerminalIcon />Other</span> : Docker, Git, GitHub, REST API, Linux</li>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}