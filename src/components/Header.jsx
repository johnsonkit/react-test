import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.2 },
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="header"
    >
      <div className="wrapper">
        <a href="/">
          <h1>
            <img
              src="/images/brand.png"
              alt="AIO Study Platform"
              className="brand"
            />
          </h1>
        </a>

        <div className="more">
          <div className="dropdown">
            <button
              className="button dropdown-toggle lang"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="icon icon-globe icon--left"></i>EN
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  繁
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  简
                </a>
              </li>
            </ul>
          </div>
          <a href="/" className="button contact">
            <i className="icon icon-call icon--left"></i>Contact Us
          </a>
          <a href="/" className="button button-coffee login">
            Login
            <i className="icon icon-login icon--right"></i>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
