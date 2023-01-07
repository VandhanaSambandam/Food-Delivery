import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-light mt-auto">
        <div className="container-fluid px-4 position-fixed">
      <div className="foot">
        <div className="d-flex align-items-center justify-content-between small">
          <div className="text-muted">Copyright &copy; Your Website 2022 </div>
          <div class="px-2">
            <Link to="#">Privacy Policy</Link>
            &middot;
            <Link to="#"> Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
