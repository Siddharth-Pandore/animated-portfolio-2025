import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CodeSmith",
    img: "code-smith.png",
    desc: "A Full Stack Code Editor with features like code execution, Adding/Sharing Snippets, multiple Programming languages support, User Authentication with clerk, Convex DB, Webhooks, Zustand, Framer Motion, TailwindCSS, Piston API, Payment with Lemon Squeezy, etc.",
  },
  {
    id: 2,
    title: "Hi-Me",
    img: "Hi-Me.png",
    desc: "Next Gen Social Media Application with create posts, likes, comment, Upload image, updating profile, signup, signin functionality. Tech used NextJs, Neon, Postgres, TailwindCSS, Typescript, Shadcn, etc.",
  },
  {
    id: 3,
    title: "HeartSwipe",
    img: "HeartSwipe.png",
    desc: "Tinder Clone: A responsive mobile app featuring JWT auth, user Signup/Login/Logout, Zustand, Tailwind, Profile image upload, Swipe Right/Left, Real-time chat (socket.io), notifications, matching algorithm, and mobile-friendly design.",
  },
  {
    id: 4,
    title: "ChatBuzz",
    img: "ChatBuzz_Homepage.png",
    desc: "Realtime Chat App with Signup, Login and Logout facilities, Multiple themes, Profile Picture update, Online users toggle switch, MongoDB, Cloudinary, CORS, TailwindCSS, DaisyUI, Axios, Lucid-react & Socket.io",
  },
  {
    id: 5,
    title: "Anime-Gaming",
    img: "Anime_Webpage.png",
    desc: "This responsive webpage is build using React, Vite, Tailwind, react-icons, GSAP. It is a clone of Award Winning Website Zentry.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <motion.img src={item.img} alt="" whileHover={{ scale: 1.1 }} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <motion.h2 whileHover={{ color: "orange" }}>{item.title}</motion.h2>
            <p>{item.desc}</p>
            <motion.button whileHover={{ scale: 1.1 }}>
              Live Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
