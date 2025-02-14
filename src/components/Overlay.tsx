import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Overlay() {
    const [screenHeight, setScreenHeight] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenHeight(window.innerHeight);
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="h-screen w-screen relative">
            {/* Top Black Bar */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -screenHeight, transition: { duration: 1.5, delay: 1.5 }, display : 'none' }}
                className="h-[calc((100vh/2)-30px)] w-full bg-black absolute top-0"
            />
            
            {/* Bottom Black Bar */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: screenHeight, transition: { duration: 1.5, delay: 1.5 }, display: 'none'  }}
                className="h-[calc((100vh/2)-30px)] w-full bg-black absolute bottom-0"
            />

            {/* Moving Arrow */}
            <motion.div
                initial={{ x: 0, y: -30 }}
                animate={{ x: screenWidth, transition: { duration: 1.5}, display:'none' }}
                className="w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[50px] border-l-white absolute top-1/2 -translate-y-1/2 z-50"
            />

            {/* Moving Bar */}
            <motion.div
                initial={{ x: 0, y: -40 }}
                animate={{ x: screenWidth, transition: { duration: 1.5 }, display : 'none' }}
                className="h-[80px] w-full absolute top-1/2 bg-black -translate-y-1/2 z-10"
            />

            {/* Fade-out Text */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, transition: { duration: 0.7, delay: 1.5 } }}
                className="flex items-center justify-center h-full w-full"
            >
                <h1 className="text-6xl tracking-wide">Hello 👋</h1>
            </motion.div>
        </div>
    );
}
