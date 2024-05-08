import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between  border-2 border-gray-100 p-3 rounded-full items-center">
        <div className="ml-8">
          <img src={logo} alt="logo" className=""></img>
        </div>
        <div className="">
          <Link to="/signin">
            <button className="py-4 px-5 border-2 rounded-full border-gray-200 mr-4 transition duration-300 hover:bg-zinc-100">
              Get Projects
            </button>
          </Link>
          <button className="py-4 px-5  rounded-full text-white bg-zinc-900 hover:bg-neutral-600">
            Onboard Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
