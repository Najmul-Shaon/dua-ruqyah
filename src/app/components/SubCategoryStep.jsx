import { motion } from "framer-motion";

export default function SubCategoryStep({ currentStep = 0, subCategories }) {

  return (
    <div className="flex flex-col space-y-4 pl-4 border-l-2 border-dotted border-[#1FA45B]">
      {subCategories.map((item, index) => (
        <motion.div
          key={item?.id}
          className="relative"
          initial={{ opacity: 0, y: -10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Final state
          transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for each step
        >
          <div className="absolute -left-5.25 top-1 w-2 h-2 rounded-full bg-[#1FA45B]" />
          <p
            className={`ml-4 cursor-pointer ${
              index === currentStep ? "text-[#1FA45B] font-semibold" : ""
            }`}
          >
            {item?.subcat_name_en}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
