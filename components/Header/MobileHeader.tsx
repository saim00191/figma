"use client";
import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import User from "@/public/assets/userImg.png";
import MenuIcon from "@/public/assets/hamburger.png";
import CrossIcon from "@/public/assets/Cross.png";
import Image1 from "@/public/assets/MobileResponsiveImg1.png";
import Image2 from "@/public/assets/MobileResponsiveImg2.png";
import Image3 from "@/public/assets/MobileResponsiveImg3.png";
import Image4 from "@/public/assets/MobileResponsiveImg4.png";
import Image5 from "@/public/assets/MobileResponsiveImg5.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    "Home",
    "Recent Calls",
    "Follow up calls",
    "Token Stats",
    "Notifications",
    "Questions",
    "Pricing Page",
  ];
  const images = [Image1, Image2, Image3, Image4, Image5];

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };

  return (
    <div className="h-screen w-full container flex  relative items-center justify-between">
      <motion.div
        className="w-[44px] sticky top-0  h-[44px] rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image src={User} alt="User" />
      </motion.div>
      <motion.div
        className="w-[54px] h-[54px] "
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={Logo} alt="User" />
      </motion.div>
      <motion.div
        className="w-[28px] h-[28px] "
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <Image src={CrossIcon} alt="CrossIcon" />
        ) : (
          <Image src={MenuIcon} alt="MenuIcon" />
        )}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="w-full h-screen flex flex-col justify-between  bg-[#060c22] absolute top-[62px] right-0 z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="h-[364px]  py-6 xsm:py-9 sm:py-14">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item}
                  className="px-[30px] py-[10px] h-[52px] flex items-center justify-between"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-[16px] text-mainColor">{item}</p>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.20869 7.00035C7.20911 7.24108 7.16195 7.47951 7.06992 7.70195C6.97789 7.9244 6.84281 8.12645 6.67244 8.29652L1.8196 13.1484L0.523438 11.8523L5.37535 7.00035L0.523438 2.14844L1.8196 0.852269L6.67152 5.70419C6.84206 5.87418 6.97731 6.0762 7.0695 6.29865C7.16168 6.52109 7.20899 6.75956 7.20869 7.00035Z"
                      fill="#6E62E5"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="flex items-center flex-col justify-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.p
                className="text-[#6E62E5] text-[18px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Logout
              </motion.p>
              <div className="flex items-center justify-between w-full px-4 xs:px-0 xs:w-[288px] h-[40px]  mt-7">
                {images.map((item, index) => (
                  <motion.div
                    key={index}
                    className="h-[40px] w-[40px] items-center flex justify-center bg-[#111736] cursor-pointer rounded-full "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      src={item}
                      alt="Icons"
                      className="h-[15px] w-[15px]"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;

