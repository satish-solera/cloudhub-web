import { CloudHubLogo, CloudLogoFill } from "@/components/svg";

export const FeedbackSecondSection = () => {
    return (
        <div className="h-[1280px] bg-[#FB432C] text-center pt-20">
            <p className="text-[16px] text-white">Best time here</p>
            <h1 className="font-[600] text-[54px] text-white">
                Better feedback at the right time.
            </h1>

            <div className="bg-[#111111] h-[358px] w-[1150px] mx-auto mt-20 rounded-[24px]">
                <div className="w-[1068px] bg-[#222222] h-[307px] mx-auto rounded-[20px]">

                    {/* first section */}
                    <div className="flex justify-between items-center mx-auto pt-10 px-10">
                       <div className="flex gap-5">
                         <CloudLogoFill />
                          <div className="flex items-start flex-col">
                            <h1 className="text-[21.86px] font-medium text-white">Cloudhub</h1>
                          <p className="text-[#737373] text-[19.43px]">
                            2m ago in Brand
                          </p>
                          </div>
                       </div>
                        <button className="bg-[#FB432C] rounded-[41.71px] w-[157px] h-[48px] text-white">
                            View Post
                        </button>
                    </div>

                    {/* second section */}
                    <div className="flex">

                        
                    </div>
                </div>
            </div>
        </div>
    );
};
