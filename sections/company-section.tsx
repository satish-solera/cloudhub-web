import { AirBNB, Coinbase, Fiberplane, HelpScout, Patron } from "@/components/svg/company"


export const CompanySection = () =>{
    return(
        <div className="flex gap-32 h-31.75 items-center justify-center ">
            <Patron/>
            <AirBNB />
            <Fiberplane />
            <Coinbase/>
            <HelpScout />
        </div>
    )
}