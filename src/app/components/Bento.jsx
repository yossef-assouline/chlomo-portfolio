"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

export const Bento = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  useEffect(() => {
    // Start the transition to shrink the navbar after a delay of 2 seconds
    const timer = setTimeout(() => {
      setIsNavExpanded(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="bg-[#181C14] h-screen p-4 grid gap-3 grid-cols-7 grid-rows-7 font-galactic">
      {/* Navbar with collapse animation */}
      <motion.nav
        initial={{
          gridRowStart: 1,
          gridRowEnd: 8, // Initially cover all rows
          maxHeight: "100vh", // Start with full height of the viewport
          opacity: 1,
        }}
        animate={{
          gridRowStart: 1,
          gridRowEnd: isNavExpanded ? 8 : 2, // Collapse to row-end 2 when not expanded
          maxHeight: isNavExpanded ? "100vh" : "13vh", // Smoothly reduce height
        }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
        className="flex justify-center w-full border border-black bg-[#ECDFCC] rounded-xl col-start-1 col-end-8 z-20 items-center font-satoshi overflow-hidden"
      >
        <motion.div
          initial={{
            width: 600,
          }}
          animate={{
            width: 200,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1.2,
            delay: 1,
          }}
          className=""
        >
          <Image
            src="/logo.png"
            width={600}
            height={600}
            alt="profile"
            className="rounded-xl "
          />
        </motion.div>
      </motion.nav>

      {/* Rest of the content */}
      <motion.div
        initial={{ x: -900 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.6 }}
        className="bg-[#697565] rounded-xl col-start-1 col-end-4 row-start-2 row-end-6 text-[5rem] flex justify-center flex-col items-end p-6"
      >
        <h1 className="font-galactic leading-none text-right text-white">
          בנוסף אני מאוד אשמח לבלה בלה בלה ועוד אעזור לכם לייצר חוויות קסומות
          לאירועים שלכם בזכות המגנטיםי
        </h1>
      </motion.div>

      <motion.div
        initial={{ x: -1400 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
        className="relative rounded-xl col-start-4 col-end-6 row-start-2 row-end-6"
      >
        <Image
          src="/photo-2.jpeg"
          layout="fill"
          objectFit="cover"
          alt="profile"
          className="rounded-xl"
        />
      </motion.div>

      <motion.div
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        className="bg-[#ECDFCC] rounded-xl col-start-6 col-end-8 row-start-2 row-end-7 flex flex-col p-4 font-galactic items-center"
      >
        <div className="w-full">
          <h1 className="mb-4 text-3xl text-right">ריקוד ראשון</h1>
          <Image
            src="/vertical.jpg"
            width={600}
            height={300}
            alt="profile"
            className="rounded-xl mb-6"
          />
          <hr className="border border-[#4A4947]" />
          <div className="rounded-md mt-4 mb-4 text-3xl text-right">
            חתונה 2
          </div>
          <hr className="border border-[#4A4947]" />
          <div className="rounded-md mt-4 mb-4 text-3xl text-right">
            חתונה 3
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.6 }}
        className="bg-[#ECDFCC] rounded-xl col-start-1 col-end-3 row-start-6 row-end-8 font-gambarino flex items-end p-4"
      >
        <p className="text-[3rem] leading-tight font-galactic text-right self-center">
          ניסיון במגנטים כמה שנים אני מאוד נהנה מהפרוסדגדגדגדגדגדגדגדגדגס קצת
          הולך לספר על הניסיון שיש לי
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -1400 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.2 }}
        className="bg-[#697565] rounded-xl col-start-3 col-end-6 row-start-6 row-end-8 flex flex-col justify-between p-4"
      >
        <div className="flex justify-between">
          <p className="text-white text-xl">יש לכם שאלות?</p>
          <a href="">
            <GoArrowUpRight className="fill-[#ECDFCC] text-[3rem] self-end" />
          </a>
        </div>
        <h1 className="text-[5rem] font-galactic ml-4 text-white w-fit self-end">
          צרו קשר
        </h1>
      </motion.div>

      <motion.div
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.7 }}
        className="flex gap-8 bg-[#ECDFCC] rounded-xl col-start-6 col-end-8 row-start-7 row-end-8 font-galactic text-[2rem] items-center justify-center"
      >
        <Link href="/">
          <motion.h1
            initial={{ opacity: 0 ,y:10}}
            animate={{ opacity: 1 ,y:0}}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 3.2 }}
          >
            Twitter
          </motion.h1>
        </Link>
        <Link href="/">
          <motion.h1
          initial={{ opacity: 0 ,y:10}}
          animate={{ opacity: 1 ,y:0}}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 3.3 }}>instgram</motion.h1>
        </Link>
        <Link href="/">
          <motion.h1
          initial={{ opacity: 0 ,y:10}}
          animate={{ opacity: 1 ,y:0}}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 3.4 }}>Pinterest</motion.h1>
        </Link>
      </motion.div>
    </div>
  );
};
