"use client";


import { AirBNB, Patron } from "@/components/svg/company";
import { motion } from "motion/react";

const TestinomialData = [
    {   
        logo: <Patron width={50} height={40}/> ,
        description : "Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures.",
        nameOfAuthor : "Gabriel Valdivia",
        subTitleOfAuthor : "Principal Product Designer, Patreon"
    },
    {
        logo: <AirBNB width={50} height={40}/>,
        description : "Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.",
        nameOfAuthor : "Buzz Usborne",
        subTitleOfAuthor : "Principal Designer, Airbus"
    },
]
export const TestinomialSection = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2  bg-[#F9FAFB] py-10 my-20 md:my-0 ">

{
    TestinomialData.map((el , id)=>{
        return(
            <TestinomialCard 
            key={id}
            logo={el.logo}
            description={el.description}
            nameOfAuthor={el.nameOfAuthor}
            subTitleOfAuthor={el.subTitleOfAuthor}
            />
        )
    })
}
  </div>;
};

export const TestinomialCard = ({
  logo,
  description,
  nameOfAuthor,
  subTitleOfAuthor,
}: {
  logo: React.ReactNode;
  description: string;
  nameOfAuthor: string;
  subTitleOfAuthor: string;
}) => {
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
        ease:"linear"
    }}
    className="w-full md:max-w-xl h-fit py-20 mx-auto border border-neutral-200 px-8 md:rounded-[20px] ">
      <div className="size-10">{logo}</div>
     
        <div className="w-full h-full md:h-45">
        <p>{description}</p>
      </div>
      <div className="my-10 md:my-0">
        <span>{nameOfAuthor}</span>
        <p>{subTitleOfAuthor}</p>
      </div>
  
    </motion.div>
  );
};
