import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Bento = () => {
  return (
    <div className="bg-[#181C14] h-screen p-4 grid gap-3 grid-cols-6 grid-rows-7 font-galactic ">
      <nav className="flex justify-center w-full border border-black bg-[#ECDFCC] rounded-xl col-start-1 col-end-7 row-start-1 row-end-2 items-center font-satoshi">
        <h1 className="ml-6 font-gambarino text-[3rem]">Chlomo Assouline.</h1>
        
      </nav>
      <div className="bg-[#ECDFCC]   rounded-xl col-start-1 col-end-4 row-start-2 row-end-6  text-[5rem] flex justify-center flex-col items-end p-6">
        <h1 className="font-galactic leading-none text-right  "> בנוסף אני מאוד אשמח לבלה בלה בלה ועוד אעזור לכם לייצר חוויות קסומות לאירועים שלכם בזכות המגנטיםי</h1>
      </div>
      <div className="relative rounded-xl col-start-4 col-end-5 row-start-2 row-end-6">
      <Image
    src="/horizontal.jpg"
    layout="fill"
    objectFit="cover"
    alt="profile"
    className="rounded-xl"
  />
      </div>
      <div className="bg-[#ECDFCC] rounded-xl col-start-5 col-end-7 row-start-2 row-end-7 flex flex-col p-6 font-galactic items-center">
        <div className="w-full">
          <h1 className=" mb-4 text-3xl text-right">ריקוד ראשון</h1>
          <Image
            src="/vertical.jpg"
            width={600}
            height={300}
            alt="profile"
            className="rounded-xl mb-6"
            // optional: you can add loading="lazy" or priority={true}
          />
          <hr className="border border-[#4A4947]" />
          <div className="rounded-md mt-4 mb-4 text-3xl text-right">חתונה 2</div>
          <hr className="border border-[#4A4947]" />
          <div className="rounded-md mt-4 mb-4 text-3xl text-right">חתונה 3</div>
        </div>
      </div>
      <div className="bg-[#ECDFCC] rounded-xl col-start-1 col-end-3 row-start-6 row-end-8 font-gambarino flex items-end p-4 ">
        <p className="  text-[3rem] leading-tight font-galactic text-right  self-center">
          ניסיון במגנטים כמה שנים אני מאוד נהנה מהפרוסדגדגדגדגדגדגדגדגדגס קצת הולך לספר על הניסיון שיש לי 
        </p>
      </div>
      <div className="bg-[#697565] rounded-xl col-start-3 col-end-5 row-start-6 row-end-8 flex flex-col  justify-between p-4">
        <p className="text-white  text-xl ">
          יש לכם <br /> שאלות?
        </p>
        <h1 className="text-[5rem] font-galactic ml-4 text-white w-fit  self-end ">
          צרו קשר
        </h1>
      </div>
      <div className="flex gap-8 bg-[#ECDFCC] rounded-xl col-start-5 col-end-7 row-start-7 row-end-8 font-galactic text-[2rem] items-center justify-center">
        <Link href="/">Twitter</Link>
        <Link href="/">Instagram</Link>
        <Link href="/">Pinterest</Link>
      </div>
    </div>
  );
};
