import Experience from "../experince/Experience";
import Projects from "../projects/Projects";
import { Separator } from "../ui/separator";
import ProfileLinks from "./ProfileLinks";

export default function HeroSection(){
    return (
        <div className="pagePadding z-30 text-white py-5 poppins">
            <div className=" max-w-2xl mx-auto py-1 px-3">
                {/* name and socials */}

                <div className="flex justify-between items-center ">
                    <h1 className=" text-2xl font-semibold tracking-wider my-1">MokshaNirugutti</h1>
                    <div>
                        <ProfileLinks/>
                    </div>
                </div>
                <Separator/>
                
                {/* experince  */}
                <div>
                    <Experience/>
                </div>

                {/* Projects*/}
                <div>
                    <Projects/>
                </div>

            </div>

        </div>
    )
}