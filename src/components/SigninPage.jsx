import React, { useState } from "react";
import errorImg from "../assets/images/error.png";
import logo from "../assets/images/logo.png";
import close from "../assets/images/close.png";
import { Link, useNavigate } from "react-router-dom";
const SigninPage = () => {
  const [error, setError] = useState(false); // Changed initial state to false
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });

  const isFormFilled = formValue.name && formValue.email;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
    setError(false); // Reset error when user starts typing
  };
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!isValidEmail(formValue.email)) {
      setError(true); // Show error if email is invalid
      return;
    } else {
      navigate("/success");
    }
    // Handle form submission
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <div className="flex justify-between p-6">
        <div>
          <img src={logo} alt="logo" className="w-[121px]  h-30.5px " />
        </div>
        <Link to="/">
          <div className="rounded-full border-2 p-2  cursor-pointer">
            <img src={close} alt="" className=" w-8 h-8 " />
          </div>
        </Link>
      </div>
      <div className="flex justify-center min-h-screen items-center ">
        <div className="w-[588px] h-[538.22px]  flex flex-col items-center">
          <p className="text-center font-grace text-4xl text-green-600">
            Registration Form
          </p>
          <p className="text-6xl text-center font-manrope pt-2">
            Start your success Journey here!
          </p>
          <div className=" mt-[80px]">
            <form className="flex flex-col w-[417px] h-[174px] ">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formValue.name}
                placeholder="Enter your name"
                className="p-6 rounded-full bg-zinc-100 text-lg  font-manrope"
              />
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-6 rounded-full bg-zinc-100 text-lg  font-manrope mt-6"
              />
              {error && (
                <p className="text-red-600 text-[16px]  flex items-center gap-2">
                  <img
                    src={errorImg}
                    alt=""
                    className="w-[13.33px] h-[13.33px]  "
                  />
                  Enter a valid email address
                </p>
              )}
              <button
                disabled={!isFormFilled || error}
                type="submit"
                className={
                  "p-6  text-white text-lg font-manrope rounded-full mt-8 " +
                  (error || !isFormFilled ? "cursor-not-allowed" : "")
                }
                style={{
                  backgroundColor:
                    error || !isFormFilled ? "#d6d3d1" : "#18181b",
                }}
                onClick={handleSumbit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
