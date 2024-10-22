"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
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
        className="flex justify-center w-full border border-black bg-[#ECDFCC] rounded-xl re col-start-1 col-end-8 z-20 items-center font-satoshi overflow-hidden flex-col"
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
            duration: 1,
            delay: 1,
          }}
          className=""
        >
          <Link href={"/"} className="">

          <Image
            src="/logo.png"
            width={600}
            height={600}
            alt="profile"
            className="rounded-xl hover:scale-110 transition-all"
          />
          </Link>
        </motion.div>
        <motion.span
          initial={{}}
          animate={{
            opacity: 0,
            display: "none",
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          class="loader absolute bottom-36"
        ></motion.span>
      </motion.nav>
      
    </div>
  );
}
