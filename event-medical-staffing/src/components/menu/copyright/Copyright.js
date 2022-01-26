import "./assets/copyright.css";

function Copyright() {
  return (
    <div className="copyright-container">
      <p>&copy;{new Date().getFullYear()} Event Medical Staffing</p>
    </div>
  );
}

export default Copyright;
