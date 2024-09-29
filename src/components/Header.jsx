import { motion } from "framer-motion";

const Header = (props) => {
  return (
    <motion.div className="border-gray-700 bg-gray-800 border-b">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-gray-100 text-2xl font-semibold">{props.title}</h1>
      </div>
    </motion.div>
  );
};

export default Header;
