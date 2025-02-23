import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";

const NavButton = ({ logout, text }) => {
  return (
    <Link href={""} className={`${logout ? "" : "hidden lg:block"}`}>
      {logout ? (
        <div className="text-base text-white rounded-3xl bg-mainGrey px-6 py-2 flex gap-2 place-items-center">
          {text}
          <FiLogIn />
        </div>
      ) : (
        <div className="text-base text-white rounded-3xl flex gap-2 px-6 py-2 bg-brandPrimary place-items-center">
          {text}
        </div>
      )}
    </Link>
  );
};

export default NavButton;
