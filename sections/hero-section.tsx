import { Background, BackgroundFull } from "@/components/svg/hero";

export const Hero = () => {
  return (
    <div className="mx-auto flex justify-center flex-col items-center text-center mt-28 w-fit">
      <h1 className="font-semibold text-[50px] lg:text-[60px]">
        Create, inspect, and apply <br /> synthetic surveillance broadly.
      </h1>
      <p className="text-[18px] font-medium text-[#5F5F5F]">
        Start with a stunning homepage. Stay motivated without hurting your
        pocket.
      </p>
      <button className="bg-[#FB432C] rounded-[39px] w-31.75 h-11 text-white mt-3">
        Start for free
      </button>
      <p className="text-[#A3A3A3] mt-5">
        Want to talk or get a live demo? <span className="text-[#525252]">Get in touch →</span>
      </p>

     <div className="absolute  top-48 lg:top-32 -z-10">
      <div className="absolute z-10 ">

          {/* lg svg */}
         {/* <BackgroundFull  width={1280} height={703}/> */}
         {/* md svg */}
         <BackgroundFull  width={700} height={700}/>
         {/* <BackgroundFull  width={1280} height={703}/> */}
      </div>
      {/* lg svg */}
         {/* <Background width={1440} height={701}/> */}

         {/* md svg */}
         <Background width={700} height={701}/>
         {/* <Background width={1440} height={701}/> */}
     </div>
    </div>
  );
};
