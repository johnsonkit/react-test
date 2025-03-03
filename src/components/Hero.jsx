import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: "-60%" }}
          whileInView={{
            opacity: 1,
            y: "-50%",

            transition: { delay: 0.8, duration: 1 },
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="hero--box"
        >
          <div className="hero--box__title">
            Welcome to the AIO Study Platform
          </div>
          <div className="hero--box__subtitle special--font">
            All-in-One Platform for Self-Learners
          </div>
          <div className="hero--box__content">
            Lorem ipsum dolor sit amet consectetur. Pellentesque velit id
            sodales et at fermentum. Sed id egestas nec odio sit.
          </div>
          <a href="/" className="button button-coffee">
            Read More
            <i className="icon icon-arrow-right icon--right"></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
