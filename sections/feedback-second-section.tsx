"use client";
import {
  ArrowRight,
  AtTheRate,
  CloudLogoFill,
  Photo1,
  Photo2,
  Photo3,
  Poll,
  Resolve,
} from "@/components/svg/feedback";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/util/cn";
import { motion } from "motion/react";
import * as React from "react";
const PhotoData = [
  {
    photo: <Photo1 />,
  },
  {
    photo: <Photo2 />,
    className: "left-6",
  },
  {
    photo: <Photo3 />,
    className: "left-13",
  },
];

const CardData = [
  {
    logo: <AtTheRate />,
    title: "Mentions",
    paragraph: "Mention anyone on your team to include them in a post.",
  },
  {
    logo: <Poll />,
    title: "Polls",
    paragraph: "Get a quick gut check from the team on design options.",
  },
  {
    logo: <Resolve />,
    title: "Resolve comments",
    paragraph: "Mark comments as resolved to keep the conversation focused.",
  },
];

export const FeedbackSecondSection = () => {
  const [isView, setIsView] = React.useState<boolean>(true);
  return (
    <div className="md:h-[1100px] lg:h-[900px] bg-[#FB432C] text-center pt-20">
      <p className="text-[16px] text-white">Best time here</p>
      <h1 className="font-[600] text-[54px] text-white">
        Better feedback at the right time.
      </h1>

      {/* first section */}
      <motion.div className="bg-[#111111] h-[358px] md:w-[600px] lg:w-[1150px] mx-auto mt-20 rounded-[24px]">
        <motion.div
          layout
          className="max-w-6xl lg:w-[1068px] bg-[#222222] h-70 mx-auto rounded-[20px]"
        >
          {isView ? (
            <>
              {/* first section */}
              <div className="flex justify-between items-center mx-auto pt-10 px-10">
                <div className="flex gap-5">
                  <CloudLogoFill />
                  <div className="flex items-start flex-col">
                    <h1 className="text-[21.86px] font-medium text-white">
                      Cloudhub
                    </h1>
                    <p className="text-[#737373] text-[19.43px]">
                      2m ago in Brand
                    </p>
                  </div>
                </div>

                <Button
                  className="rounded-[41.71px] w-39.25"
                  onClick={() => setIsView(false)}
                >
                  View Post
                </Button>
              </div>

              {/* second section */}
              <div className="flex gap-36 mt-20 px-10 justify-between">
                <div className="flex justify-between  gap-36 ">
                  <div className="relative">
                    {PhotoData.map((el, id) => {
                      return (
                        <PhotoDiv key={id} className={el.className}>
                          {el.photo}
                        </PhotoDiv>
                      );
                    })}
                  </div>
                  <h1 className="text-[19.43px] text-white font-medium flex items-center my-2.5">
                    3 people are looking for feedback this week
                  </h1>
                </div>

                <ArrowRight />
              </div>
            </>
          ) : (
            <motion.div
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                duration: 1,
                ease:"linear"
            }}
            layout
             className="grid grid-cols-3 h-[270px] relative">
              <div className="size-6 bg-white absolute right-3 top-3 rounded-full text-center flex items-center justify-center">
                <Button className="size-6" onClick={() => setIsView(true)}>
                  X
                </Button>
              </div>
              <div className="col-span-2 border border-[#ffffff15] h-full rounded-[20px] m-1"></div>
              <div className="col-span-1 border border-[#ffffff15] h-full rounded-[20px] m-1 overflow-hidden flex items-center justify-center bg-[#111111]">
                <div className="w-full h-full flex items-center justify-center scale-[0.55] origin-center">
                  <ApiCheck width={650} height={456} />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* second section with 3 card */}
      <div className="grid grid-cols-3 mt-3 md:w-[620px] lg:w-[1150px] mx-auto">
        {CardData.map((el, id) => {
          return (
            <InfoCard
              key={id}
              logo={el.logo}
              title={el.title}
              paragraph={el.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
};

export const PhotoDiv = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("absolute size-12", className)}>{children}</div>;
};

export const InfoCard = ({
  logo,
  title,
  paragraph,
}: {
  logo: React.ReactNode;
  title: string;
  paragraph: string;
}) => {
  return (
    <div className="bg-[#111111] md:w-[200px] lg:w-[376px] md:h-[300px] lg:h-[173px] rounded-[24px] ">
      <div className="flex flex-col items-start mt-5 mx-10">
        {logo}
        <h1 className="text-white text-[18px] ">{title}</h1>
        <p className="text-[#737373] text-start text-[16px] font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
