
"use client";
import * as React from "react";


export const useWindowSize =  () =>{

    const [size , setSize] = React.useState<number>(0);


    React.useEffect(()=>{

        const handleResize = () =>{
            setSize(
               window.innerWidth,
              
            );
        };

        window.addEventListener("resize" , handleResize);

        return () => window.removeEventListener("resize" , handleResize);

    } , [])
    return size
}