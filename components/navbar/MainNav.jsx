import React from "react";
import MainLogo from "../reusable/navbarReuse/MainLogo";
import NavButton from "../reusable/navbarReuse/NavButton";

const MainNav = () => {
  return (
    <nav className="flex justify-between lg:px-24 px-10 py-6">
      <MainLogo />
      <div className="flex gap-5">
        <NavButton logout={true} text={"Login"} />
        <NavButton logout={false} text={"Register Now"} />
      </div>
    </nav>
  );
};

export default MainNav;
