import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <a href="mailto:r.landroche@gmail.com">Send Email</a>
        <a
          href="https://github.com/roselandroche"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub Profile
        </a>
        <a
          href="https://www.linkedin.com/in/rose-landroche/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit LinkedIn Profile
        </a>
      </ul>
    </div>
  );
}

export default Footer;
