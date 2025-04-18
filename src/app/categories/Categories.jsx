import { CiSearch } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import axiosInstence from "../../../lib/axios";
import CategoryCard from "./CategoryCard";

const Categories = ({ setContents }) => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInstence.get("/api/category");
      return res.data;
    },
  });

  // console.log(categories);
  return (
    <div className="rounded-xl bg-white mt-9 min-h-screen border border-[#E2E2E2]">
      <h3 className="text-center p-4 bg-[#1FA45B] text-white font-semibold text-lg rounded-t-xl">
        Categories
      </h3>
      <div>
        <div className="p-4 pb-0">
          <label className="input w-full">
            <CiSearch className="size-6" />
            <input type="search" required placeholder="Search by Categories" />
          </label>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.cat_id}
              category={category}
              setContents={setContents}
            ></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
