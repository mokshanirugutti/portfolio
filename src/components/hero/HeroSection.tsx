import Experience from "../experince/Experience";
import Projects from "../projects/Projects";
import { Separator } from "../ui/separator";
import ProfileLinks from "./ProfileLinks";
import {motion} from 'framer-motion'

export default function HeroSection(){
    return (
        <div className="pagePadding z-30 text-white py-5 poppins">
            <div className=" max-w-2xl mx-auto py-1 px-3">
                {/* name and socials */}

                <div className="flex justify-between items-center ">
                    <div>
                        <h1 className=" text-2xl font-semibold tracking-wider my-1">MokshaNirugutti</h1>
                        <p className="text-sm font-light text-white/60 mb-1 ">Full Stack Developer</p>
                    </div>
                    <div>
                        <ProfileLinks/>
                    </div>
                </div>
                <Separator/>
                
                {/* experince  */}
                <motion.div
                initial={{opacity:0, scale:0.7}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.4,delay:2.5}}
                >
                    <Experience/>
                </motion.div>

                {/* Projects*/}
                <motion.div
                initial={{opacity:0, x:50}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.4, delay:3}}
                >
                    <Projects/>
                </motion.div>

            </div>

        </div>
    )
}