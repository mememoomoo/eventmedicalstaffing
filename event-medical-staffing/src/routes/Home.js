import HomePage from "../components/pages/home/home";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Home() {
  return (
    <motion.div
      initial="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 2 }}
    >
      <HomePage />
    </motion.div>
  );
}

export default Home;
