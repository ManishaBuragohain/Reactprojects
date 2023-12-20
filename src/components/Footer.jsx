import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Manisha</h1>
        <p>@all right reserve</p>
      </div>
      <div>
        <h5>Follow us</h5>
        <div>
          <a href="https://github.com/ManishaBuragohain" target={"_blank"}>
            Github
          </a>
          {/* < a href="">Facebook</a> */}
          <a
            href="https://www.linkedin.com/in/manisha-buragohain/"
            target={"_blank"}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
