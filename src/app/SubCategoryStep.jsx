import { motion } from "framer-motion";

const steps = [
  "What is DuaWhat is DuaWhat is DuaWhat is DuaWhat is Dua",
  "Conditions for Dua",
  "The Method of Dua",
  "Before Dua",
  "During Dua",
];

export default function SubCategoryStep({ currentStep = 0 }) {
  return (
    <div className="flex flex-col space-y-4 pl-4 border-l-2 border-dotted border-green-500">
      {steps.map((item, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: -10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Final state
          transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for each step
        >
          <div className="absolute -left-5.25 top-1 w-2 h-2 rounded-full bg-green-500" />
          <p
            className={`ml-4 ${
              index === currentStep ? "text-green-600 font-semibold" : ""
            }`}
          >
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
