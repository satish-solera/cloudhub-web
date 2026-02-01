"use client";
import { ApiCheck, Check, PlayButton } from "@/components/svg";
import { ArrowRight } from "@/components/svg/feedback";
import { Button } from "@/components/ui/button";
import { useWindowSize } from "@/hooks/window-size-detector";
import { motion, useAnimate } from "motion/react";

import * as React from "react";

export const ShareSection = () => {
  const [scope, animate] = useAnimate();

  const animateShareButton = () => {
    animate(".share-button", {
      scale: [1, 1.08, 1.02],
      opacity: 1,
    });
  };

  const width = useWindowSize();
  const isDesktop = width >= 1024;
  return (
    <div className="h-163 flex flex-col-reverse md:flex-row items-center mx-auto justify-center gap-10 mt-100 md:mt-0">
      <div className="relative  mb-60 md:mb-0 ml-4" ref={scope}>
        <Button
          className="share-button hover:scale-105 transition-all"
          onClick={animateShareButton}
        >
          Share
        </Button>

        <h1 className="md:w-[300px] lg:w-[560px] text-[34px] lg:text-[54px]  font-semibold text-balance leading-tight">
          Share anything you’re working on.
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#5F6980] md:w-[300px] lg:w-[500px] ">
          Campsite has been instrumental in keeping designers aware of each
          others' work-in-progress in a way that was previously slowing us down.
          It's also one of the only channels where.
        </p>

        <div className="flex gap-5">
          <div className="flex gap-2 mt-5">
            <Check /> <p className="text-[16px]">Coded</p>
          </div>
          <div className="flex gap-2 mt-5">
            <Check /> <p className="text-[16px]">100% Secure</p>
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <PlayButton />{" "}
          <p className="font-semibold text-[16px]">See how it works</p>
        </div>
      </div>

      <div className="">
        {/* lg svg */}
        {/* <ApiCheck width={650} height={456} /> */}
        {/* md svg */}
        <ApiCheck width={isDesktop ? 800 : 400} height={456} />
        {/* <ApiCheck width={650} height={456} /> */}
      </div>
    </div>
  );
};
