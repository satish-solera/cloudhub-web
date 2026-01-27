import { Feedback, PlayButton } from "@/components/svg";

export const FeedbackFirstSection = () => {
  return (
    <div className="h-[653px] flex items-center justify-center mx-auto">
      <div className="w-[656px]">
        <Feedback />
      </div>

      <div className="">
        <button className="bg-[#FB432C] rounded-[100px] w-[94px] h-11 text-white">
          Feedback
        </button>
        <h1 className="w-[560px] text-[54px]  font-[600] text-balance">
          Better feedback at the right time.
        </h1>
        <p className="text-[18px] text-[#5F6980] w-[500px] ">
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
