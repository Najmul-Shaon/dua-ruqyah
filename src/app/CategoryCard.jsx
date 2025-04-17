"use client";
import { useState } from "react";
import SubCategoryStep from "./SubCategoryStep";
import { useQuery } from "@tanstack/react-query";
import axiosInstence from "../../lib/axios";

// const CategoryCard = ({ setIsSubCatView, isSubCatView }) => {
const CategoryCard = ({ category }) => {
  // console.log(category);
  const [isSubCatView, setIsSubCatView] = useState(false);
  const [isSubCatId, setIsSubCatId] = useState(null);
  const handleSubcat = (catId) => {
    console.log(catId);
    setIsSubCatId(catId);
    setIsSubCatView(!isSubCatView);
  };

  const { data: subCategories = [] } = useQuery({
    enabled: !!isSubCatId,
    queryKey: ["subCategories"],
    queryFn: async () => {
      const res = await axiosInstence.get(`/api/sub-category/${isSubCatId}`);
      return res.data;
    },
  });
  // console.log(subCategories);

  return (
    <>
      <div
        //   if user click on this card expand its subCategories items
        onClick={() => handleSubcat(category?.cat_id)}
        className="flex gap-4 justify-between items-center bg-[#E8F0F5] p-2.5 rounded-xl cursor-pointer"
      >
        <figure className="bg-[#CFE0E5] p-2.5 rounded-xl">
          <img src="/assets/005-fever.png" alt="" />
        </figure>
        <div className="flex-1">
          <h3 className="text-[#1FA45B] font-semibold text-base">
            {category?.cat_name_en}
          </h3>
          <p className="text-[#7E7E7E] text-sm font-normal poppins-font">
            Subcategory: {category?.no_of_subcat}
          </p>
        </div>
        <div className="flex flex-col items-center flex-shrink-0">
          <p className="font-semibold text-base text-[#393939]">
            {category?.no_of_dua}
          </p>
          <p className="font-normal text-[#7E7E7E] text-sm poppins-font">
            Duas
          </p>
        </div>
      </div>
      {/* expandable subcategories  */}
      {isSubCatView && <SubCategoryStep subCategories={subCategories} />}
    </>
  );
};

export default CategoryCard;
