import { Progress1, Progress2 } from "@/components/svg/progress";


const progressData = [
    {
        title: "Projects",
        subTitle: "Organize, follow, and archive.",
        logo: <Progress1 />
    },
    {
        title: "Member profiles",
        subTitle: "Automatic portfolios of your work.",
        logo: <Progress2 />
    }
]

export const ProgressSection = () => {
    return (
        <div className="h-[727px]">
            <h1 className="text-[54px] font-semibold text-center mt-20">
                Your Archive of progress
            </h1>

            <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 mt-15">
                {
                    progressData.map((el, id) => {
                        return (
                            <ProgressDiv key={id} title={el.title} subTitle={el.subTitle} logo={el.logo} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export const ProgressDiv = ({
    title,
    subTitle,
    logo,
}: {
    title: string;
    subTitle: string;
    logo: React.ReactNode;
}) => {
    return (
        <div className="w-[570px] h-[398px] rounded-px bg-[#FCFCFC] mx-auto">
            <h1 className="text-4.5 font-semibold text-center">{title}</h1>
            <span className="text-4.5 flex items-center justify-center text-[#525252]">{subTitle}</span>
            <div className="flex items-center justify-center">{logo}</div>
        </div>
    );
};
