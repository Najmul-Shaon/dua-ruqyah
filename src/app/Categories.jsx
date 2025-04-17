"use client";
import { CiSearch } from "react-icons/ci";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

const Categories = () => {
  //   const [isSubCatView, setIsSubCatView] = useState(false);

  //   console.log(isSubCatView);

  return (
    <div className="rounded-xl bg-white mt-9">
      <h3 className="text-center p-4 bg-[#1FA45B] text-white font-semibold text-lg rounded-t-xl">
        Categories
      </h3>
      <div>
        <div className="p-4 pb-0">
          <label className="input">
            <CiSearch className="size-6" />
            <input type="search" required placeholder="Search by Categories" />
          </label>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {/* <CategoryCard
            isSubCatView={isSubCatView}
            setIsSubCatView={setIsSubCatView}
          />
          <CategoryCard
            isSubCatView={isSubCatView}
            setIsSubCatView={setIsSubCatView}
          />
          <CategoryCard
            isSubCatView={isSubCatView}
            setIsSubCatView={setIsSubCatView}
          /> */}
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default Categories;
