import { cn } from "@/lib/util/cn";
import { HTMLAttributes } from "react";



type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-[#FB432C] rounded-[100px] w-17 h-11 text-white my-5 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
