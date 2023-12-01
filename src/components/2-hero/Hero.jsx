import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer, designer, and Developer.
        </motion.h1>

        <p className="sub-title">
          Web developer, I am proficient in a variety of platforms and systems.
          In addition to my technical skills, I am a great communicator and team
          player. My ability to communicate well enables me to work effectively
          with clients to identify objectives and requirements for applications.
        </p>

        <div className="all-icons flex">
          <a
            href="https://www.facebook.com/mostafa.nashaat01?mibextid=ZbWKwL"
            className="icon"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://github.com/mostafanashaat2001"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/mostafa-nashaat-41a438245"
            className="icon icon-linkedin"
          ></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
