import { useContext } from "react";
import { Link } from "react-router-dom";

import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const Header = () => {
  const { clientLogout, isClientLoggedIn } = useContext(ClientContext)

  if (isClientLoggedIn == false) {
    return (
      <div className="flex justify-center w-full bg-background h-[40]">
        <div className="flex justify-center py-[0px] px-[20px] w-full border-y border-green1 my-5 mx-5">
          <Link to="/">
            <button className="text-rmred bg-background hover:bg-greenbg text-base font-inter font-bold w-[157px] h-[54px]">
              DATA
            </button>
          </Link>
          <Link to="/login">
            <button className="text-green2 bg-background hover:bg-greenbg text-base font-inter font-bold w-[157px] h-[54px]">
              LOGIN
            </button>
          </Link>
          <Link to="/register">
            <button className="text-green2 bg-background hover:bg-greenbg text-base font-inter font-bold w-[157px] h-[54px]">
              REGISTER
            </button>
          </Link>
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
              <button onClick={ clientLogout } className="text-green2 bg-background hover:bg-greenbg text-base font-inter font-bold w-[157px] h-[54px]">
                LOGOUT
              </button>
          </div>
        </div>
      );
    };
};