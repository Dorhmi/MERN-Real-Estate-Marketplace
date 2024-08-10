// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    signInFailure,
    signInStart,
    signInSuccess,
} from "../../redux/user/UserSlice";

export default function SignupPage() {
    const [userData, setUserData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch("http://localhost:3000/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate("/");
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5 pt-16">
            <h2 className=" text-2xl font-bold text-[#12341e]">Sign In</h2>
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
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
            <div className=" flex gap-2">
                <p className=" tracking-wide">Dont have an account?</p>
                <Link to={"/signup"}>
                    <span className=" text-blue-600">Sign Up</span>
                </Link>
            </div>
        </div>
    );
}
