"use client";
import { Check, PlayButton } from "@/components/svg";
import { Add, Photo1, Photo2, Photo3 } from "@/components/svg/feedback";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/util/cn";
import { motion, useAnimate } from "motion/react";

import * as React from "react";

type FeedbackDataItem = {
  photo: React.ReactNode;
  name: string;
  status: Status;
};
const FeedbackData: FeedbackDataItem[] = [
  {
    photo: <Photo1 />,
    name: "Buzz Usborne",
    status: "Done",
  },
  {
    photo: <Photo2 />,
    name: "Gabriel Valdivia",
    status: "Pending",
  },
  {
    photo: <Photo3 />,
    name: "Jochem Dierx",
    status: "Requested",
  },
];
export const FeedbackFirstSection = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [sendFeedback, setSendFeedback] = React.useState<boolean>(false);
  const [scope, animate] = useAnimate();

  const handleClick = async () => {
   
    
     await animate(
    ".feedback-button",
    {
      opacity: [0 , 0 ],
      
    },

    {
      duration: 0.8,
      ease:"easeIn"
    },
  );


    await animate(
      ".animate-button",
      
      {
        
        opacity: [1],
        width: [" 30px" , "40px"],
        height:[  "30px","40px"],
        radius: "1000px",
        scale: [ 1 , 1.08 , 0.9]
      },
      {
        duration: 0.3,
        ease: "easeIn"
      },
    );
  };

  

 

  return (
    <div className="h-[665px] md:h-[653px] flex flex-col md:flex-row items-center justify-center mx-auto mt-20 md:mt-0">
      <div className="w-[300px] lg:w-[358px] h-[380px] bg-[#171717] rounded-3xl mx-auto  ">
        {/* <Feedback /> */}

        {sendFeedback ? (
          <motion.div
            layout
            className="flex justify-between items-center mt-5 mx-5 h-fit text-white  flex-col gap-5 "
          >
            <input
              placeholder="enter your feedback"
              className="h-40 w-full border border-[#ffffff5a] text-center rounded-xl"
            />
            <button
              className="bg-[#FB432C] rounded-[39px] w-35 h-11 text-white cursor-pointer"
              onClick={() =>
                setTimeout(() => {
                  setSendFeedback(false);
                }, 1000)
              }
            >
              Send feedback
            </button>

            {sendFeedback ? (
              ""
            ) : (
              <span className="text-[13.88px] text-white">Sended</span>
            )}
          </motion.div>
        ) : (
          <motion.div className="" layout>
            <div className="flex justify-between items-center mt-5 mx-5">
              <h1 className="text-[18.33px] text-white">
                Looking for feedback?
              </h1>
              <motion.button
                layout
                className={cn(
                  "bg-[#FB432C] rounded-[39px] w-9 h-5  relative cursor-pointer",
                  toggle && "bg-[#171717] border border-[#ffffff5a] ",
                )}
                onClick={() => setToggle((prev) => !prev)}
              >
                {toggle ? (
                  <div className="rounded-full left-0.5 top-[1.5px] size-4 absolute bg-white"></div>
                ) : (
                  <div className="rounded-full right-0.5 top-0.5 size-4 absolute bg-white"></div>
                )}
              </motion.button>
            </div>

            <div className="mx-5 mt-7 mb-10">
              {FeedbackData.map((el, id) => {
                return (
                  <FeedbackDiv
                    key={id}
                    photo={el.photo}
                    name={el.name}
                    status={el.status}
                  />
                );
              })}
              <div
                className="flex gap-5 items-center h-18.75  cursor-pointer px-2 group"
                onClick={() => setSendFeedback(true)}
              >
                <button className="bg-[#FB432C] rounded-full size-11.5 text-white flex items-center justify-center group-hover:scale-105 cursor-pointer">
                  <Add />
                </button>
                <span className="text-[13.88px] font-semibold text-[#FD4E26] font-semibold">
                  Add More
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className=" mb-8 md:mt-0 ml-4" ref={scope}>
       <div className=" relative w-23.5 " >
         <Button className="w-23.5 feedback-button relative z-20 hover:scale-105 transition-all " onClick={handleClick}>
          Feedback
        </Button>
        <Button className="animate-button  absolute right-14 z-10 text-center opacity-0 scale-100 "><span className="flex items-center justify-center"><Check /></span></Button>

       </div>

        <h1 className="md:w-[200px] lg:w-[560px] md:text-[25px] lg:text-[54px]  font-semibold text-balance leading-tight">
          Better feedback at the right time.
        </h1>
        <p className="text-[16px] text-[#5F6980] md:w-75 lg:w-125 my-3">
          Campsite has been instrumental in keeping designers aware of each
          others' work-in-progress in a way that was previously slowing us down.
          It's also one of the only channels where.
        </p>

        <div className="flex gap-2 mt-5">
          <PlayButton />{" "}
          <p className="font-semibold text-[16px]">See how it works</p>
        </div>
      </div>
    </div>
  );
};

type Status = "Pending" | "Done" | "Requested";
type FeedbackProps = {
  status: Status;
  photo: React.ReactNode;
  name: string;
};

export const FeedbackDiv = ({ photo, name, status }: FeedbackProps) => {
  return (
    <div className="flex items-center justify-between border-b border-[#FFFFFF0D] h-[74px] hover:bg-[#FFFFFF0D] px-2 cursor-pointer hover:scale-105 rounded-[20px] transition-all mb-0.5">
      {photo}
      <h1 className="text-white text-[13.88px]">{name}</h1>
      <p className="text-[#9D9FA1] text-[13px]">{status}</p>
    </div>
  );
};
