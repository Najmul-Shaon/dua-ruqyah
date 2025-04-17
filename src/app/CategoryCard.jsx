"use client";
import { useState } from "react";
import SubCategoryStep from "./SubCategoryStep";

// const CategoryCard = ({ setIsSubCatView, isSubCatView }) => {
const CategoryCard = () => {
  const [isSubCatView, setIsSubCatView] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsSubCatView(!isSubCatView)}
        className="flex gap-4 justify-between items-center bg-[#E8F0F5] p-2.5 rounded-xl cursor-pointer"
      >
        <figure className="bg-[#CFE0E5] p-2.5 rounded-xl">
          <img src="/assets/005-fever.png" alt="" />
        </figure>
        <div className="flex-1">
          <h3 className="text-[#1FA45B] font-semibold text-base">
            Introduction to Dua
          </h3>
          <p className="text-[#7E7E7E] text-sm font-normal">Subcategory: 11</p>
        </div>
        <div className="flex flex-col items-center flex-shrink-0">
          <p className="font-semibold text-base text-[#393939]">15</p>
          <p className="font-normal text-[#7E7E7E] text-sm">Duas</p>
        </div>
      </div>
      {isSubCatView && <SubCategoryStep />}
    </>
  );
};

export default CategoryCard;
