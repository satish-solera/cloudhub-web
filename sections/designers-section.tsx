"use client";
import { Airbus, Crowdstrike, Hays, Senerty, AutoTrader, Cathepacific, LiquidWeb, Medwing } from "@/components/svg/designer"
import { motion } from "motion/react"

const DesignerLogoData = [
    {
        logo: <Airbus />
    },
    {
        logo: <Crowdstrike />
    },
    {
        logo: <Hays />
    },
    {
        logo: <Senerty />
    },
   
    {
        logo: <AutoTrader />
    },
    {
        logo: <Cathepacific />
    },
    {
        logo: <LiquidWeb />
    },
    {
        logo: <Medwing />
    },

]

export const DesignerSection = () => {
    return (
        <div className="mb-20 mx-5">
            <h1 className="text-[54px] text-center my-10">
                Loved By Designers At
            </h1>

      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {
                DesignerLogoData.map((el, id) => {
                    return (
                        <DesignerLogo key={id} logo={el.logo} />
                    )
                })
            }
        </div>
        </div>
    )
}


export const DesignerLogo = ({ logo }: { logo: React.ReactNode }) => {
    return (
        <motion.div 
        initial={{
            scale: 1
        }}

        whileHover={{
            scale: 1.02
        }}

        transition={{
            duration: 0.3,
            ease: "linear"
        }}

        
        className="w-74 h-36 bg-[#F9FAFB] flex items-center justify-center p-1">
            {
                logo
            }
        </motion.div>
    )
}