import { CloudHubLogo } from "./svg"


export const Navbar = () => {
    return (
        <nav className="flex items-center h-20  justify-between gap-7 mx-20 ">
            <div className="flex gap-20 items-center">
                {/* logo */}
                <CloudHubLogo />
                {/* list of nav */}
                <div className="">
                    <ul className="flex gap-5">
                        <li>
                            Product
                        </li>
                        <li>
                            Home
                        </li>
                        <li>
                            Shop
                        </li>
                        <li>
                            Pages
                        </li>
                    </ul>
                </div>
            </div>


            {/* authentication options */}
            <div className="flex gap-4 ">
                <button>
                    Login
                </button>
                <button className="bg-[#FB432C] rounded-[39px] w-31.75 h-11 text-white">
                    Start for free
                </button>
            </div>
        </nav>
    )
}