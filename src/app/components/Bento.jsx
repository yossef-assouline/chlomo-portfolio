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
import { Secular_One, Karantina } from "next/font/google";

const secular = Secular_One({
  weight: ["400"],
  subsets: ["latin"],
});

const karantina = Karantina({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const Counter = ({ from, to, duration, delay }) => {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    const startTime = Date.now() + (delay * 1000); // Convert delay to milliseconds
    const endTime = startTime + (duration * 1000); // Convert duration to milliseconds
    
    const updateCounter = () => {
      const now = Date.now();
      if (now < startTime) {
        // Wait for delay
        requestAnimationFrame(updateCounter);
        return;
      }
      
      if (now >= endTime) {
        setCount(to);
        return;
      }
      
      const progress = (now - startTime) / (duration * 1000);
      const currentCount = Math.floor(from + (to - from) * progress);
      setCount(currentCount);
      requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [from, to, duration, delay]);

  return count;
};

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
    <div
      className="bg-[#181C14] min-h-screen lg:h-screen p-4 grid gap-3 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-7 
      grid-rows-[auto_auto_auto_auto_auto] 
      lg:grid-rows-7 
      font-galactic
      
      overflow-y-hidden lg:overflow-hidden"
    >
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
        className="rounded-xl relative overflow-hidden
          col-span-1
          sm:col-span-2
          lg:col-start-1 lg:col-end-4 
          min-h-[300px]
          lg:h-full
          lg:row-start-2 lg:row-end-6 
          flex justify-center flex-col p-6 
          sm:col-start-1 sm:col-end-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(-144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient2'%3E%3Cstop stop-color='%23884A39' stop-opacity='1' offset='-0%25'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient gradientTransform='rotate(144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient3'%3E%3Cstop stop-color='hsl(24, 64%25, 2%25)' stop-opacity='1'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='101' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='3'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='3'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='3'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -13'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='%23884a39'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient3)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient2)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.14' style='mix-blend-mode: soft-light'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Effects */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div className="relative z-10 flex flex-col  gap-6  ">
          {/* Main Heading Section */}
          <motion.div
            className="text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <h1
              className={`${karantina.className} lg:text-right text-5xl sm:text-5xl lg:text-6xl mb-2 text-white font-bold `}
            >
              שלום, אני שלמה 
              <span className="block text-[#ECDFCC] mt-1 lg:text-4xl ">
              הצלם שמנציח את הרגעים שלכם בצורה הכי אמיתית ומרגשת.
              </span>
            </h1>
            <motion.p
              className={`${karantina.className}   font-bold  text-2xl sm:text-3xl lg:text-3xl text-white mt-4 lg:text-right `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
            >
              מומחה לצילומי זוגות, משפחות, ילדים, פורטרטים ואירועים.
            </motion.p>
          </motion.div>

          {/* Tagline with Animated Border */}
          <motion.div
            className=" group w-full max-w-sm lg:self-end self-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
          >
            <div className="absolute  inset-0 bg-gradient-to-r from-[#ECDFCC]/20 to-white/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500" />
            <p className="text-base sm:text-lg lg:text-xl text-center text-white p-4 rounded-lg backdrop-blur-sm border border-white/10">
              מקצועיות, יצירתיות ואיכות ללא פשרות
            </p>
          </motion.div>

          {/* Success Counter */}
          <motion.div
            className="text-center lg:text-right "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.9 }}
          >
            <div className="text-[#ECDFCC] text-xl sm:text-2xl lg:text-3xl font-bold mb-1">
              <Counter from={0} to={1000} duration={2} delay={2.9} />
            </div>
            <p className="text-white text-lg sm:text-xl">לקוחות מרוצים</p>
            <p className="text-[#ECDFCC] text-base sm:text-lg mt-1 font-light">
              עכשיו תורך!
            </p>
          </motion.div>

          {/* Single Call to Action Button */}
          <motion.div
            className=" flex justify-center lg:justify-end mx-auto w-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2 }}
          >
            <Link
              href="/photo"
              className=""
            >
              <button className="w-full button-86"> 📸 לגלריה </button>
            </Link>
          </motion.div>
        </motion.div>
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
          
          font-galactic overflow-hidden"
      >
        <h1
          className={`${karantina.className} font-bold text-4xl sm:text-xl lg:text-[2.5vw] mb-3 text-center text-black`}
        >
          הצצה לגלריה
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
        <div className="hidden lg:block h-[80%] ">
          <Swiper
            className="h-full -mb-12 bg-transparent"
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
                className="relative z-40 h-full rounded-xl "
              >
                <Image
                  src="/slider-2.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="portfolio image"
                  className="rounded-xl  transition-all hover:rounded-xl"
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
                  className="rounded-xl transition-all"
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
                  className="rounded-xl  transition-all"
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
                  className="rounded-xl  transition-all"
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
        <div className="flex flex-col items-center">
          <motion.span 
            className="text-6xl sm:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.8 }}
          >
            <Counter from={0} to={5} duration={1.5} delay={2.8} />
            +
          </motion.span>
          <p className="text-sm sm:text-base xl:text-4xl text-center">
            שנות ניסיון
            <span className="block mt-1 text-xs xl:text-xl sm:text-sm opacity-80">
              בצילום אירועים מקצועי
            </span>
          </p>
        </div>
        
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
          flex flex-col justify-between  overflow-hidden" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(-144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient2'%3E%3Cstop stop-color='%23884A39' stop-opacity='1' offset='-0%25'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient gradientTransform='rotate(144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient3'%3E%3Cstop stop-color='hsl(24, 64%25, 2%25)' stop-opacity='1'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='101' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='3'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='3'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='3'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -13'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='%23884a39'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient3)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient2)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.14' style='mix-blend-mode: soft-light'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col h-full relative ">
          {/* Decorative Elements */}
          <motion.div 
            className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col h-full ">
            {/* Title Section */}
            <motion.div 
              className="text-center lg:text-right mb-4 relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
            >
              <h2 className={`${karantina.className} font-bold text-white text-4xl sm:text-5xl xl:text-6xl mb-2 leading-tight mr-4`}>
                חבילת צילום מקצועית
                {" "}
                <span className="text-[#28282d] text-2xl sm:text-3xl xl:text-6xl mt-1">
                  מותאמת אישית
                </span>
              </h2>

              {/* Floating Price Badge */}

              {/* Sliding Badges */}
              <div className="relative flex overflow-x-hidden mt-6">
                <div className="flex animate-scroll">
                  <div className="flex space-x-6 whitespace-nowrap">
                    {[
                      "צילום חוץ לבחירתכם",
                      "משך צילום: כשעה",
                      "100–150 תמונות כולל עריכה מקצועית",
                      "גלריה דיגיטלית באיכות גבוהה",
                      "יחס אישי, סבלני ומקצועי"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 bg-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 + (index * 0.2) }}
                      >
                        <span className="text-white text-lg sm:text-xl">
                          {item}
                        </span>
                        <span className="text-[#ECDFCC] text-xl sm:text-2xl">•</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex space-x-6 whitespace-nowrap ml-6">
                    {[
                      "צילום חוץ לבחירתכם",
                      "משך צילום: כשעה",
                      "100–150 תמונות כולל עריכה מקצועית",
                      "גלריה דיגיטלית באיכות גבוהה",
                      "יחס אישי, סבלני ומקצועי"
                    ].map((item, index) => (
                      <motion.div 
                        key={`duplicate-${index}`}
                        className="backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 bg-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 + (index * 0.2) }}
                      >
                        <span className="text-white text-lg sm:text-xl">
                          {item}
                        </span>
                        <span className="text-[#ECDFCC] text-xl sm:text-2xl">•</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
              <div className="flex justify-between items-center px-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, y: -20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, type: "spring", stiffness: 100 }}
                >
                  <div className="relative group ">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#28282d] via-[#18181b] to-[#28282d] rounded-xl shadow-xl group-hover:shadow-[#28282d]/20 transition-all duration-300 opacity-75"></div>
                    <div className="relative bg-gradient-to-r from-[#28282d]/10 via-[#3a3a42]/10 to-[#28282d]/10  rounded-xl shadow-xl px-6 py-3 border border-white/10 shadow-2xl hover:shadow-[#28282d]/20 transition-all duration-300 transform hover:scale-105">
                      <p className="text-sm text-white/90">מחיר מיוחד</p>
                      <p className="text-2xl font-bold text-white">₪300</p>
                      <p className="text-xs text-white/80 text-center">בלבד</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                className="flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.6 }}
                >
                  <Link href="https://wa.me/972536670760?text=שלום,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20שירותי%20המגנטים%20שאתה%20מציע." target="_blank">
                    <button className="button-86">
                      <IoLogoWhatsapp className="text-1xl animate-pulse" />
                 ליצור קשר
                    </button>
                  </Link>
                </motion.div>
              </div>
          </div>
        </div>
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
          href="https://wa.me/972536670760?text=שלום,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20שירותי%20המגנטים%20שאתה%20מציע."
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
