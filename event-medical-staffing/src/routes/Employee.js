import EmployeePage from "../components/pages/employee/employee";
import { motion } from "framer-motion";

function Employee() {
  return (
    <motion.div exit={{ opacity: 0 }} className="Employee">
      <EmployeePage />
    </motion.div>
  );
}

export default Employee;
