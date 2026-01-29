import { CloudLogoFill } from "../svg/feedback";
import { Button } from "./button";


const FooterData = [
    {
        title: "Products",
        list : ["Features" , "Pricing" , "Changelog" , "Support"]
    },
    {
        title: "Legal",
        list : ["Terms of Privacy" , "Security" ,  "Privacy Policy"]
    },
    {
        title: "Company",
        list : ["Blog" , "Contact" ]
    },
    {
        title: "Social",
        list : ["Dribbble" , "Behance"  , "Discord" ]
    },

]
export const Footer = () => {
  return (
    <div className="min-h-svh">
      <div className="max-w-2xl h-81 mx-auto">
        <div className="mx-auto text-center flex flex-col items-center justify-center">
          <CloudLogoFill />
          <h1 className="text-[26px] font-semibold">
            Increase your team’s visibility and alignment
          </h1>
          <p className="text-[20px] text-[#525252]">
            Start for free, flexible for all teams.
          </p>
          <Button className="w-fit px-5 hover:scale-105 transition-all">
            Start for free
          </Button>
        </div>
      </div>

      {/* bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="mx-auto">
            <CloudLogoFill/>
        </div>
        {
            FooterData.map((el , id)=>{
                return(
<FooterBottom key={id} title={el.title} list={el.list}/>
                )
            })
        }
       
      </div>
      <p className="mx-auto my-5 text-center text-[#5F6980]">All rights reserved.© 2026 vengenceui</p>
    </div>
  );
};


export const FooterBottom = ({title , list}: {title : string , list: string[]}) =>{
    return(
         <div className="">
            <h1 className="text-[14px]">{title}</h1>
            <ul>
               {
                list.map((el , id)=>{
                    return(
                        <li className="text-[14px] text-[#5F6980] my-2 cursor-pointer" key={id}>
                            {
                                el
                            }
                        </li>
                    )
                })
               }
            </ul>
        </div>
    )
}