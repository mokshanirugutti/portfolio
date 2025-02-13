import Experience from "../experince/Experience";
import Projects from "../projects/Projects";
import { FlipWords } from "../ui/flip-words";
import { Separator } from "../ui/separator";
import ProfileLinks from "./ProfileLinks";
import {motion} from 'framer-motion'

export default function HeroSection(){
    const words = ["Full Stack Developer", "70WPM", "Mechanical Keyboards","HacktoberFest 2024",];
    return (
        <div className="pagePadding z-30 text-white py-5 poppins">
            <div className=" max-w-2xl mx-auto py-1 px-3">
                {/* name and socials */}
                <motion.div
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.3,delay:2.5}}
                >

                <div className="flex justify-between items-center ">
                    <div>
                        <h1 className=" text-2xl font-semibold tracking-wider my-1">MokshaNirugutti</h1>
                        <FlipWords words={words} className="text-sm font-light text-white/60 mb-1"/> 
                    </div>
                    <div>
                        <ProfileLinks/>
                    </div>
                </div>
                <Separator/>
                
                </motion.div>
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