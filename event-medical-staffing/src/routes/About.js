import AboutPage from "../components/pages/about/about";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div exit={{ opacity: 0 }} className="About">
      <AboutPage />
    </motion.div>
  );
}

export default About;
