"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { FaPinterest } from "react-icons/fa";
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
import { FaTwitter } from "react-icons/fa";
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
          class="loader absolute bottom-36"
        ></motion.span>
      </motion.nav>

      {/* Rest of the content */}
      <motion.div
        initial={{ x: -900, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.6 }}
        className=" rounded-xl  col-start-1 col-end-4 row-start-2 row-end-6 text-[2vw] flex justify-center flex-col  p-6 overflow-hidden items-center gap-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(-144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient2'%3E%3Cstop stop-color='%23884A39' stop-opacity='1' offset='-0%25'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient gradientTransform='rotate(144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient3'%3E%3Cstop stop-color='hsl(24, 64%25, 2%25)' stop-opacity='1'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='101' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='3'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='3'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='3'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -13'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='%23884a39'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient3)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient2)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.14' style='mix-blend-mode: soft-light'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 2.3 }}
            className="font-galactic leading-snug  text-white text-center "
          >
            אני שלמה אסולין, צלם מקצועי שבתחום הצילום למעלה מ-15 שנה... מאז שהייתי בן 13, הצילום היה חלק מחיי! הידע המקצועי שלי בצילום הוא הכשרה מתמדת, לימודים, קורסים, ספרים, סדנאות, הרצאות וניסיון רב שנים בתחום הצילום! יותר מ-2,000,000 תמונות אני עשיתי רק ב-5 השנים האחרונות! שימחתי למעלה מ-1000 זוגות שהחליטו לעבור איתי את היום הכי 
          </motion.h1>
          <Link href={"/photo"}><button class="button-86" role="button" >לגלריה התמונות</button></Link>
        
      </motion.div>

      <motion.div
        initial={{ x: -1400, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
        className="relative rounded-xl col-start-4 col-end-6 row-start-2 row-end-6 z-40 "
      >
        <Image
          src="/chlomo.jpeg"
          layout="fill"
          objectFit="cover"
          alt="profile"
          className="rounded-xl hover:scale-95 hover:opacity-90 transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ x: 600, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        className="bg-[#ECDFCC] rounded-xl col-start-6 col-end-8 row-start-2 row-end-7 p-12  font-galactic overflow-hidden "
      >
        <h1 className="text-[2.5vw] -mt-12 text-center ">העבודה שלי</h1>
        <hr className="w-2/4 h-[2px] border-0  bg-gradient-to-r from-transparent via-[#697565] to-transparent mb-4 -mt-2 mx-auto" />
        <Swiper
          className="h-full -mb-12"
          effect={"cards"}
          grabCursor={true}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="">
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
                alt="profile"
                className="rounded-xl hover:scale-105 transition-all"
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 1, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
              className="relative z-40 h-full "
            >
              <Image
                src="/slider-1.jpeg"
                layout="fill"
                objectFit="cover"
                alt="profile"
                className="rounded-xl hover:scale-105 transition-all"
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 1, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
              className="relative z-40 h-full "
            >
              <Image
                src="/photo-2.jpeg"
                layout="fill"
                objectFit="cover"
                alt="profile"
                className="rounded-xl hover:scale-105 transition-all"
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 1, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
              className="relative z-40 h-full hover:scale-105 transition-all"
            >
              <Image
                src="/photo-1.jpeg"
                layout="fill"
                objectFit="cover"
                alt="profile"
                className="rounded-xl hover:scale-105 transition-all"
              />
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ y: 400, scale: 0.1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.6 }}
        className="bg-[#ECDFCC] rounded-xl col-start-1 col-end-2 row-start-6 row-end-8 font-gambarino flex flex-col items-center p-4 justify-center"
      >
        <p className="text-[1.5rem] leading-tight font-galactic self-center text-center">
          להצעת מחיר צרו קשר שירותי צילום לכל אירוע, בהתאמה אישית
        </p>
        <p className="text-[1rem] leading-tight font-galactic self-center text-center">
        צילום אירועים / צילום חתונה/ צילום טראש / צילום בר מצווה / בוק בת-בר מצווה / מגנטים לאירועים
        </p>
        <motion.a
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 3 }}
          href="https://wa.me/972525076029?text=שלום,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20שירותי%20המגנטים%20שאתה%20מציע."
          target="_blank"
          className=""
        >
          <GoArrowUpRight className="fill-black hover:scale-125 transition-all text-[3rem] self-end" />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ x: -1400, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.2 }}
        className="rounded-xl col-start-2 col-end-6 row-start-6 row-end-8 flex flex-col justify-center  p-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(-144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient2'%3E%3Cstop stop-color='%23884A39' stop-opacity='1' offset='-0%25'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient gradientTransform='rotate(144, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='gggrain-gradient3'%3E%3Cstop stop-color='hsl(24, 64%25, 2%25)' stop-opacity='1'%3E%3C/stop%3E%3Cstop stop-color='rgba(255,255,255,0)' stop-opacity='0' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='101' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='3'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='3'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='3'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -13'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='%23884a39'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient3)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient2)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.14' style='mix-blend-mode: soft-light'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex  flex-col items-center gap-4">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 2.9 }}
            className="text-white text-[2rem] text-center "
          >
            מגנטים לאירועים - מגנטים סטנדרטיים
מגנטים לאירועים בגודל סטנדרטי 7,5*10
מתאים לכל מי שרוצה לתת מזכרת לאורחים ויחד עם זאת לשמור על התקציב. מגנטים מודפסים בהדפסה תרמית איכותית וישמחו אתכם לאורך זמן רב. צלם מגנטים מקצועי וכמובן מגיע עם איש מקצוע נוסף תר!
          </motion.p>
          <Link href={"/magnet"}><button class="button-86" role="button" >למגנטים שלי</button></Link>
        </div>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 3.1 }}
          href="https://wa.me/972525076029?text=שלום,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20שירותי%20המגנטים%20שאתה%20מציע."
          target="_blank"
          className="text-[1.5rem] text-right font-galactic ml-4 text-white w-fit self-end  transition-all"
        ></motion.a>
      </motion.div>

      <motion.div
        initial={{ x: 600, scale: 0.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2.7 }}
        className="flex justify-around bg-[#ECDFCC] rounded-xl col-start-6 col-end-8 row-start-7 row-end-8 font-galactic text-[2rem] items-center "
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

{
  /* <div className="w-full">
          <motion.h1 
          initial={{ opacity: 1, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2.2 }}
          className="mb-4 text-3xl text-right">
            ריקוד ראשון
          </motion.h1>
          <motion.div 
          initial={{ opacity: 1, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2.3 }}
          >
          <Image
            src="/vertical.jpg"
            width={600}
            height={300}
            alt="profile"
            className="rounded-xl mb-6"
          />
          </motion.div>
          <motion.hr
          initial={{ opacity: 1, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2.4 }}
           className="border border-[#4A4947]" />
          <motion.div 
          initial={{ opacity: 1, x: 700 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2.5 }}
          className="rounded-md mt-4 mb-4 text-3xl text-right">
            חתונה 2
          </motion.div>
          <motion.hr 
          initial={{ opacity: 1, x: 700 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2.6 }}
          className="border border-[#4A4947]" />
          <motion.div 
          initial={{ opacity: 1, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2.7 }}
          className="rounded-md mt-4 mb-4 text-3xl text-right">
            חתונה 3
          </motion.div>
        </div> */
}
// אני שלמה אסולין, צלם מקצועי שבתחום הצילום למעלה מ-15 שנה... מאז שהייתי בן 13, הצילום היה חלק מחיי! הידע המקצועי שלי בצילום הוא הכשרה מתמדת, לימודים, קורסים, ספרים, סדנאות, הרצאות וניסיון רב שנים בתחום הצילום! יותר מ-2,000,000 תמונות אני עשיתי רק ב-5 השנים האחרונות! שימחתי למעלה מ-1000 זוגות שהחליטו לעבור איתי את היום הכי חשוב בחייהם - החתונה שלהם! צילום אירועים, צילומי חתונות, צילומי בר/בת מצווה, אלבומים דיגיטלים, סרטונים, קליפים - צוות הצילום שלנו יודע לעשות זאת בבצורה הטובה 
//             צילום אירועים / צילום חתונה/ צילום טראש / צילום בר מצווה / בוק בת-בר מצווה / מגנטים לאירועים