import { ApiCheck, Check, PlayButton } from "@/components/svg"


export const ShareSection = () => {
    return (
        <div className="h-163 flex items-center mx-auto justify-center ">
            <div className="">
                <button className="bg-[#FB432C] rounded-[100px] w-[68px] h-11 text-white">
                    Share
                </button>
                <h1 className="md:w-[300px] lg:w-[560px] md:text-[25px] lg:text-[54px]  font-[600] text-balance">
                    Share anything you’re  working on.
                </h1>
                <p className="text-[18px] text-[#5F6980] md:w-[300px] lg:w-[500px] ">
                    Campsite has been instrumental in keeping designers aware of
                    each others' work-in-progress in a way that was previously
                    slowing us down. It's also one of the only channels where.
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
                    <PlayButton /> <p className="font-semibold text-[16px]">See how it works</p>
                </div>

            </div>

            <div className="">
                {/* lg svg */}
                {/* <ApiCheck width={650} height={456} /> */}
                {/* md svg */}
                <ApiCheck width={400} height={456} />
                {/* <ApiCheck width={650} height={456} /> */}
            </div>
        </div>
    )
}