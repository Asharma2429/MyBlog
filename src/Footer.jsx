import React from "react";

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="container">
          <div className="footer-in">
            <div className="box-1">
              <h1>IMPACT</h1>
              <br />
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>

              <div className="icon">
                <ul>
                  <a href="/">
                    <li>
                      {" "}
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                  </a>
                  <a href="/">
                    <li>
                      <i class="fa-brands fa-facebook"></i>
                    </li>
                  </a>
                  <a href="https://www.instagram.com/a.n.k.i.t.29/" target="blank">
                    <li>
                      <i class="fa-brands fa-instagram"></i>
                    </li>{" "}
                  </a>
                  <a href="https://www.linkedin.com/in/ankit-sharma-073aaa241/"target="blank">
                    <li>
                      <i class="fa-brands fa-linkedin"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="box-2">
              <h2>Useful Links</h2>

              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            <div className="box-2">
              <h2>Our Services</h2>

              <ul>
                <li>Web Designv</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>

            <div className="box-3">
              <h2>Contact Us</h2>

              <p>Plot No 120 Meenawala Jaipur</p>
              <br />
              <br />
              <p>
                Phone: +91 7976755591 <br />
                Email: asharma24294@gmail.com
              </p>
            </div>
          </div>
          <div className="link">
            <p>
              © Copyright <strong> Impact.</strong> All Rights Reserved
            </p>
            <p>Designed by BootstrapMade</p>
          </div>
        </div>
      </div>
    </>
  );
}
export { Footer };
