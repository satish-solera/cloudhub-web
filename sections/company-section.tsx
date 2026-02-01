"use client";


import { AirBNB, Coinbase, Fiberplane, HelpScout, Patron } from "@/components/svg/company"
import { motion } from "motion/react";


export const CompanySection = () =>{
    return(
       <div className="overflow-hidden mx-auto hidden md:block ">
         <motion.div
        initial={{
            x : ["-100%"]
        }}
        animate={{
            x: ["-10%" , "90%"]
        }}

        transition={{
            duration: 10,
            repeat: Infinity,
            ease:"linear"
        }}
        className="flex gap-32  items-center justify-center  overflow-hidden ">
            <Patron/>
            <AirBNB />
            <Fiberplane />
            <Coinbase/>
            <HelpScout />
        </motion.div>
       </div>
    )
}