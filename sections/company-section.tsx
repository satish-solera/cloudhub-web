"use client";


import { AirBNB, Coinbase, Fiberplane, HelpScout, Patron } from "@/components/svg/company"
import { motion } from "motion/react";


export const CompanySection = () =>{
    return(
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
        className="flex gap-32 h-31.75 items-center justify-center ">
            <Patron/>
            <AirBNB />
            <Fiberplane />
            <Coinbase/>
            <HelpScout />
        </motion.div>
    )
}