import React from "react";
import MainParagraph from "../reusable/heroReuse/MainParagraph";
import Link from "next/link";

const MainFooter = () => {
  return (
    <div
      style={{bottom: 0, width: "100%" }}
      className="bg-transparent/5 backdrop-blur-lg text-center">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <Link href={"/"} className="underline text-blue-800">Register Now </Link>
        <MainParagraph text={"to enjoy Unlimited History"} />
      </div>
    </div>
  );
};

export default MainFooter;
