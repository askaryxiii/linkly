import React from "react";
import MainHeroTitle from "../reusable/heroReuse/MainHeroTitle";
import MainParagraph from "../reusable/heroReuse/MainParagraph";

const MainHero = () => {
  return (
    <div className="flex flex-col gap-5 pt-16 items-center justify-center">
      <MainHeroTitle />
      <MainParagraph
        text={
          "Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience."
        }
      />
    </div>
  );
};

export default MainHero;
