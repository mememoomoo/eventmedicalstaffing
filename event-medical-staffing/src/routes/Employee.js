import EmployeePage from "../components/pages/employee/employee";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Employee() {
  return (
    <div className="Employee">
      <Header />
      <EmployeePage />
      <Footer />
    </div>
  );
}

export default Employee;
