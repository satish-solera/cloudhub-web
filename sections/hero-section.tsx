"use client";
import { useWindowSize } from "@/hooks/window-size-detector";
import { Background, BackgroundFull } from "@/components/svg/hero";

export const Hero = () => {

  const width= useWindowSize();

   const isMobile = width < 640;
   const isTablet = width >= 640 && width < 1024;
   const isDesktop = width >= 1024;

  return (
    <div className="mx-auto flex justify-center flex-col items-center text-start md:text-center md:mt-28 w-fit">
     <div className="ml-4">
       <h1 className="font-semibold text-[34px] lg:text-[60px] leading-tight ">
        Create, inspect, and apply synthetic surveillance broadly.
      </h1>
      <p className="text-[18px] font-medium text-[#5F5F5F] my-6 md:my-0">
        Start with a stunning homepage. Stay motivated without hurting your
        pocket.
      </p>
      <button className="bg-[#FB432C] rounded-[39px] w-31.75 h-11 text-white mt-3">
        Start for free
      </button>
      <p className="text-[#A3A3A3] mt-5 text-[12px]">
        Want to talk or get a live demo? <span className="text-[#525252]">Get in touch →</span>
      </p>
     </div>

     <div className="absolute  top-48 lg:top-32 -z-10">
      <div className="absolute z-10 ">

          {/* lg svg */}
         {/* <BackgroundFull  width={1280} height={703}/> */}
         {/* md svg */}
         <BackgroundFull  width={ isDesktop ? 1280 : 300} height={ 700}/>
         {/* <BackgroundFull  width={1280} height={703}/> */}
      </div>
      {/* lg svg */}
         {/* <Background width={1440} height={701}/> */}

         {/* md svg */}
         <Background width={ isDesktop ? 1440 : 300} height={701}/>
         {/* <Background width={1440} height={701}/> */}
     </div>
    </div>
  );
};
