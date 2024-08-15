import "@/styles/Footer.css";

function Footer() {
  return (
    <div className="footer" id="Contact">
        <br />
        <img src="/assets/logo.svg" alt="" />


      <div className="links">
        <ul>
        <li>
          <a href="#Hero1">Home</a>
        </li>
        <li>
          <a href="#Hero2">About Me</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        </ul>
      </div>

      <div className="social-icons">
        <ul>
          <li>
            <img src="/assets/facebook.svg" alt="" />{" "}
          </li>
          <li>
            <img src="/assets/twitter.svg" alt="" />
          </li>
          <li>
            <img src="/assets/instagram.svg" alt="" />
          </li>
          <li>
            <img src="/assets/linkedin.svg" alt="" />
          </li>
        </ul>
      </div>

      <div className="footer-text">
        <p>&copy; 2023 <span>Mumair</span> All Rights Reserved, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
