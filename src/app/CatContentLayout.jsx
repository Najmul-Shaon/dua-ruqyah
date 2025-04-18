import { useState } from "react";
import Categories from "./categories/Categories";
import Contents from "./components/Contents";

const CatContentLayout = () => {
  const [contents, setContents] = useState([]);
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Categories will stay fixed with no scroll */}
      <div className="col-span-3">
        <Categories setContents={setContents} />
      </div>

      {/* Contents will be scrollable */}
      <div className="col-span-9 overflow-y-auto max-h-screen no-scrollbar">
        {/* <Contents /> */}
        {contents.map((content, index) => (
          <Contents key={content?.id} content={content} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CatContentLayout;
