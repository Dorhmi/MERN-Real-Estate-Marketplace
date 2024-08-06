// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
    const [userData, setUserData] = useState({});
    const [isloading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsloading(true);
            const res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await res.json();
            console.log(data);
            if (data.success === false) {
                setIsloading(false);
                setError(data.message);
                return;
            }
            setIsloading(false);
            setError(null);
            navigate("/signin");
        } catch (error) {
            setIsloading(false);
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5 pt-16">
            <h2 className=" text-2xl font-bold text-[#12341e]">Sign Up</h2>
            {error && (
                <p className=" text-red-500 w-[250px] md:w-[400px]">
                    {" "}
                    {error}{" "}
                </p>
            )}
            <form
                onSubmit={handleSubmit}
                className=" w-[250px] md:w-[400px] flex flex-col gap-5"
            >
                <input
                    className=" bg-slate-200 p-2 rounded-lg"
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                />
                <input
                    className=" bg-slate-200 p-2 rounded-lg"
                    type="text"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                />
                <input
                    className=" bg-slate-200 p-2 rounded-lg"
                    type="text"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                />
                <button className=" bg-[#76bce8] text-white p-1.5 rounded-lg duration-[0.3s] hover:bg-[#639bbe]">
                    {isloading ? "Loading..." : "Submit"}
                </button>
            </form>
            <div className=" flex gap-2">
                <p className=" tracking-wide">Have an account?</p>
                <Link to={"/signin"}>
                    <span className=" text-blue-600">Sign in</span>
                </Link>
            </div>
        </div>
    );
}
