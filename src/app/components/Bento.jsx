"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

import { RiInstagramFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
} from "swiper/modules";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

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
    <div className="bg-[#181C14] min-h-screen lg:h-screen p-4 grid gap-3 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-7 
      grid-rows-[auto_auto_auto_auto_auto] 
      lg:grid-rows-7 
      font-galactic
      
      overflow-y-hidden lg:overflow-hidden">
      
      {/* Navbar - adjusted height for better proportion */}
      <motion.nav
        initial={{
          gridRowStart: 1,
          gridRowEnd: 8,
          height: "97vh",
          opacity: 1,
        }}
        animate={{
          gridRowStart: 1,
          gridRowEnd: isNavExpanded ? 8 : 2,
          height: isNavExpanded ? "97vh" : "13vh",
        }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
        className="flex justify-center w-full border border-black bg-[#ECDFCC] rounded-xl 
          
          lg:col-start-1 lg:col-end-8 sm:col-start-1 sm:col-end-8
          z-20 items-center font-satoshi overflow-hidden flex-col"
      >
        <motion.div
          initial={{
            width: 400,
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
          <Link href={"/"}>
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
          class="loader absolute bottom-24"
        ></motion.span>
      </motion.nav>

      {/* Main content section - adjusted height */}
      <motion.div
        initial={{ x: -900, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.6 }}
        className="rounded-xl 
          col-span-1
          sm:col-span-2
          lg:col-start-1 lg:col-end-4 
          min-h-[300px]
          lg:h-full
          lg:row-start-2 lg:row-end-6 
          text-base md:text-[2vw] 
          flex justify-center flex-col p-6 
          sm:col-start-1 sm:col-end-8
          overflow-hidden items-center gap-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(-144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient2'%3E%3Cstop stop-color='%23884A39' stop-opacity='1' offset='-0%25'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient gradientTransform='rotate(144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient3'%3E%3Cstop stop-color='hsl(24, 64%25, 2%25)' stop-opacity='1'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='101' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='3'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='3'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='3'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -13'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='%23884a39'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient3)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient2)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.14' style='mix-blend-mode: soft-light'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          className="font-galactic leading-relaxed text-white text-center 
            text-base sm:text-lg md:text-xl lg:text-5xl "
        >
          שלום, אני שלמה, צלם מקצועי שמעניק לכל לקוח יחס אישי, קשוב וממוקד,
          ומספק שירות ברמה הגבוהה ביותר.
          <span className="block mt-3  sm:text-2xl opacity-90">
            מעל 1000 זוגות בחרו בי להנציח את הרגעים המיוחדים שלהם
          </span>
        </motion.h1>
        <Link href={"/photo"}>
          <button className="button-86" role="button">
            לגלריית התמונות
          </button>
        </Link>
      </motion.div>

      {/* Profile Image - adjusted height */}
      <motion.div
        initial={{ x: -1400, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
        className="relative rounded-xl 
          col-span-1
          sm:col-span-2
          lg:col-start-4 lg:col-end-6 
          min-h-[300px]
          lg:h-full
          sm:col-start-1 sm:col-end-8
          
          lg:row-start-2 lg:row-end-6 
          z-40"
      >
        <Image
          src="/chlomo.jpeg"
          layout="fill"
          objectFit="cover"
          alt="profile"
          className="rounded-xl hover:scale-95 hover:opacity-90 transition-all"
        />
      </motion.div>

      {/* Portfolio section - adjusted height */}
      <motion.div
        initial={{ x: 600, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        className="bg-[#ECDFCC] rounded-xl 
          col-span-1
          sm:col-span-2
          lg:col-start-6 lg:col-end-8 
          min-h-[400px]
          lg:h-full
          lg:row-start-2 lg:row-end-7 
          p-4 lg:p-12 
          sm:col-start-1 sm:col-end-8
          md:col-start-1 md:col-end-8
          md:min-h-[700px]
          font-galactic overflow-hidden"
      >
        <h1 className="text-xl sm:text-2xl lg:text-[2.5vw] mb-3 text-center text-black">
          תיק העבודות שלי
        </h1>
        <hr className="w-2/4 h-[2px] border-0 bg-gradient-to-r from-transparent via-[#697565] to-transparent mb-2 -mt-2 mx-auto" />
        
        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden h-[100%] w-full">
          <Swiper
            className="h-full w-full"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="rounded-xl overflow-hidden">
              <motion.div className="relative w-full h-[700px] sm:h-[900px]">
                <Image
                  src="/slider-2.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl  transition-all"
                />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl overflow-hidden">
              <motion.div className="relative w-full h-[700px] sm:h-[900px]">
                <Image
                  src="/slider-1.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl  transition-all"
                />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl overflow-hidden">
              <motion.div className="relative w-full h-[700px] sm:h-[900px]">
                <Image
                  src="/photo-2.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl  transition-all"
                />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl overflow-hidden">
              <motion.div className="relative w-full h-[700px] sm:h-[900px]">
                <Image
                  src="/photo-1.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl  transition-all"
                />
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Desktop Cards Effect */}
        <div className="hidden lg:block h-[80%]">
          <Swiper
            className="h-full -mb-12"
            effect={"cards"}
            grabCursor={true}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 1, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
                className="relative z-40 h-full rounded-xl"
              >
                <Image
                  src="/slider-2.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl hover:scale-105 transition-all"
                />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 1, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
                className="relative z-40 h-full rounded-xl"
              >
                <Image
                  src="/slider-1.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl hover:scale-105 transition-all"
                />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 1, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
                className="relative z-40 h-full rounded-xl"
              >
                <Image
                  src="/photo-2.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl hover:scale-105 transition-all"
                />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 1, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
                className="relative z-40 h-full rounded-xl"
              >
                <Image
                  src="/photo-1.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl hover:scale-105 transition-all"
                />
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>

      {/* Special Offer - adjusted height */}
      <motion.div
        initial={{ y: 400, scale: 0.1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.6 }}
        className="bg-[#ECDFCC] rounded-xl 
          col-span-1
          lg:col-start-1 lg:col-end-2 
          min-h-[200px]
          lg:h-full
          lg:row-start-6 lg:row-end-8 
          sm:col-start-1 sm:col-end-8
          font-gambarino flex flex-col items-center p-4 justify-center text-black"
      >
        <p className="text-sm sm:text-base lg:text-2xl font-galactic text-center">
          הצעה מיוחדת לאירוע שלכם
          <span className="block mt-2 text-xs sm:text-md opacity-80">
            חתונות | בר/בת מצווה | אירועי חברה
          </span>
        </p>
        <motion.a
          href="https://wa.me/972525076029"
          target="_blank"
          className="button-86 text-sm flex items-center gap-2 hover:scale-105 transform transition-all"
        >
          <IoLogoWhatsapp className="text-xl" />
          לשיחת ייעוץ
        </motion.a>
      </motion.div>

      {/* Magnets section - adjusted height */}
      <motion.div
        initial={{ x: -1400, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.2 }}
        className="rounded-xl 
          col-span-1
          sm:col-span-2
          lg:col-start-2 lg:col-end-6 
          
          lg:h-full
          lg:row-start-6 lg:row-end-8 
          sm:col-start-1 sm:col-end-8
          flex flex-col justify-center p-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(-144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient2'%3E%3Cstop stop-color='%23884A39' stop-opacity='1' offset='-0%25'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient gradientTransform='rotate(144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient3'%3E%3Cstop stop-color='hsl(24, 64%25, 2%25)' stop-opacity='1'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='101' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='3'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='3'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='3'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -13'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='%23884a39'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient3)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient2)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.14' style='mix-blend-mode: soft-light'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex  flex-col items-center gap-4 
        ">
          <motion.div className="text-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-5xl mb-2">
              מגנטים שהופכים רגעים לזכרונות
            </h2>
            <p className="text-white text-sm sm:text-2xl opacity-90">
              צוות מקצועי | הדפסה איכותית | משלוח מהיר
            </p>
          </motion.div>
          <Link href={"/magnet"}>
            <button className="button-86" role="button">
              למחירים ודוגמאות
            </button>
          </Link>
        </div>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 3.1 }}
          href="https://wa.me/972525076029?text=שלום,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20שירותי%20המגנטים%20שאתה%20מציע."
          target="_blank"
          className="text-[1.5rem] text-right font-galactic ml-4 text-white w-fit self-end  transition-all "
        ></motion.a>
      </motion.div>

      {/* Social Links - adjusted height */}
      <motion.div
        initial={{ x: 600, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.7 }}
        className="flex justify-around bg-[#ECDFCC] rounded-xl 
          col-span-1
          sm:col-span-2
          lg:col-start-6 lg:col-end-8 
          min-h-[100px]
          lg:h-full
          sm:col-start-1 sm:col-end-8
          lg:row-start-7 lg:row-end-8 
          font-galactic text-2xl lg:text-[2rem] items-center text-black"
      >
        <Link
          href="https://wa.me/972525076029?text=שלום,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20שירותי%20המגנטים%20שאתה%20מציע."
          target="_blank"
          className="hover:scale-125 transition-all"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 3.2 }}
          >
            <IoLogoWhatsapp />
          </motion.h1>
        </Link>
        <Link
          href="Https://www.instagram.com/chlomo_assouline"
          target="_blank"
          className="hover:scale-125 transition-all"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 3.3 }}
          >
            <RiInstagramFill />
          </motion.h1>
        </Link>
        <Link
          href="https://www.facebook.com/chlomo.assouline?mibextid=LQQJ4d"
          target="_blank"
          className="hover:scale-125 transition-all"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 3.4 }}
          >
            <FaFacebook />
          </motion.h1>
        </Link>
      </motion.div>
    </div>
  );
};
