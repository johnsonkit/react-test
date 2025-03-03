import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.2 },
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="nav--list__wrapper"
    >
      <ul className="nav--list">
        <li className="nav--list__item">
          <a href="/">Home</a>
        </li>
        <li className="nav--list__item">
          <a href="/about-us">About Us</a>
        </li>
        <li className="nav--list__item">
          <a href="/schools">Schools</a>
        </li>
        <li className="nav--list__item">
          <a href="/media-highlights">Media Highlights</a>
        </li>
        <li className="nav--list__item">
          <a href="/help">Help</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
