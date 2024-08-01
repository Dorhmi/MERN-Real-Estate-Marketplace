import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
    return (
        <header className=" bg-[#beffd5] shadow-md">
            <div className=" flex justify-between items-center p-3 w-[80%] mx-auto">
                <Link to={"/"}>
                    <h1 className=" font-bold text-xl sm:text-2xl">
                        <span className=" text-[#4aa269] text-3xl">R</span>
                        <span className=" text-[#12341e]">estate</span>
                    </h1>
                </Link>
                <form className=" bg-[#edfff3] p-[8px] rounded-xl flex items-center gap-1">
                    <input
                        className=" bg-transparent w-28 md:w-72 focus:outline-none"
                        type="text"
                    />
                    <button>
                        <IoSearch />
                    </button>
                </form>
                <nav className=" flex items-center gap-5">
                    <Link
                        to={"/"}
                        className=" duration-[0.3s] text-[#12341e] hidden sm:inline hover:underline"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/about"}
                        className=" duration-[0.3s] text-[#12341e] hidden sm:inline hover:underline "
                    >
                        About
                    </Link>
                    <Link
                        to={"/signin"}
                        className=" duration-[0.3s] text-[#12341e]  hover:underline "
                    >
                        SignIn
                    </Link>
                </nav>
            </div>
        </header>
    );
}
