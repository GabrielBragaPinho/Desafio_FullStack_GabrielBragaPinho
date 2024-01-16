import { Link } from "react-router-dom";
import { useContext } from "react";

import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const Header = () => {
  const { clientLogout, isClientLoggedIn } = useContext(ClientContext);

  if (isClientLoggedIn == false) {
    return (
      <div className="flex justify-center w-full bg-background h-[40]">
        <div className="flex justify-center py-[0px] px-[20px] w-full border-y border-green1 my-5 mx-5">
          <Link to="/">
            <button className="btn2">
              DATA
            </button>
          </Link>
          <Link to="/login">
            <button className="btn1">
              LOGIN
            </button>
          </Link>
          <Link to="/register">
            <button className="btn1">
              REGISTER
            </button>
          </Link>
            <button className="btn2">
              LOGOUT
            </button>
        </div>
      </div>
    );
  } else {
      return (
        <div className="flex justify-center w-full bg-background h-[40]">
          <div className="flex justify-center py-[0px] px-[20px] w-full border-y border-green1 my-5 mx-5">
            <button className="text-green2 bg-greenbg text-base font-inter font-bold w-[157px] h-[54px]">
              DATA
            </button>
            <button className="text-rmred bg-background hover:bg-greenbg text-base font-inter font-bold w-[157px] h-[54px]">
              LOGIN
            </button>
            <button className="text-rmred bg-background hover:bg-greenbg text-base font-inter font-bold w-[157px] h-[54px]">
              REGISTER
            </button>
              <button onClick={ clientLogout } className="btn1">
                LOGOUT
              </button>
          </div>
        </div>
      );
    };
};