import React from "react";
import ContentCard from "./ContentCard";

const Contents = ({ content, index }) => {
  console.log(content);
  return (
    <div className="mt-9">
      <h3 className="font-medium text-base text-[#393939] py-4 px-8 bg-white rounded-xl border border-[#E2E2E2]">
        <span className="text-[#1FA45B] font-semibold">Section:</span>{" "}
        {content?.dua_name_en}
      </h3>
      {/* <div className="grid grid-cols-1 gap-2.5 mt-2.5 px-8 rounded-xl border border-[#E2E2E2]"> */}
      <div className="grid grid-cols-1 gap-2.5 mt-2.5">
        <ContentCard content={content} index={index} />
      </div>
    </div>
  );
};

export default Contents;
