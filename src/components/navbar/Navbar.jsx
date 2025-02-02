import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Siddharth Pandore
        </motion.span>
        <div className="social">
          <a href="https://github.com/Siddharth-Pandore">
            <img src="/gitwhite.png" alt="" id="gitwhite" />
          </a>
          <a href="https://www.linkedin.com/in/siddharth-pandore/">
            <img src="/linkedinwhite.png" alt="" />
          </a>
          <a href="https://x.com/home">
            <img src="/twitter2.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
