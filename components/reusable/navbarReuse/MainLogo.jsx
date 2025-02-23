import Image from "next/image";
import Link from "next/link";
import React from "react";
import Linkly from "@/public/Linkly.webp";

const MainLogo = () => {
  return (
    <Link href={"/"} className="w-1/2">
      <Image
        src={Linkly}
        width={120}
        height={120}
        alt="Picture of the author"
      />
    </Link>
  );
};

export default MainLogo;
