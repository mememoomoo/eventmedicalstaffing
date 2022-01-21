import ContactPage from "../components/pages/contact/contact";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div exit={{ opacity: 0 }} className="Contact">
      <ContactPage />
    </motion.div>
  );
}

export default Contact;
