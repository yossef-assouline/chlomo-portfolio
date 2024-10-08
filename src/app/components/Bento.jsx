import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Bento = () => {
  return (
    <div className="bg-black h-screen p-4 grid gap-3 grid-cols-5 grid-rows-5 ">
      <nav className="flex justify-between w-full border border-black bg-[#D8D2C2] rounded-xl col-start-1 col-end-6 row-start-1 row-end-2 items-center font-satoshi">
        <h1 className="ml-6 font-gambarino text-[2rem]">LOGO</h1>
        <div className="mr-6 gap-8 flex text-2xl">
          <Link href="/"> About</Link>
          <Link href="/">Weddings</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
      <div className="bg-[#D8D2C2]  pl-4 rounded-xl col-start-1 col-end-3 row-start-2 row-end-4 font-gambarino text-[3.5rem] flex justify-center flex-col">
        Creating magic memories for your special day
      </div>
      <div className="rounded-xl col-start-3 col-end-4 row-start-2">
        <Image
          src="https://placehold.co/400x375"
          width={400}
          height={350}
          alt="profile"
          className="rounded-xl"
          // optional: you can add loading="lazy" or priority={true}
        />
      </div>
      <div className="bg-[#D8D2C2] rounded-xl col-start-4 col-end-6 row-start-2 row-end-5 flex flex-col p-6 font-gambarino items-center">
        <div className="w-full">
          <h1 className="mb-4 text-2xl">First Dance</h1>
          <Image
            src="https://placehold.co/600x300"
            width={600}
            height={300}
            alt="profile"
            className="rounded-xl"
            // optional: you can add loading="lazy" or priority={true}
          />
          <hr className="mt-4 border border-[#4A4947]" />
          <div className="rounded-md mt-4 mb-4 text-2xl">Wedding 1</div>
          <hr className="border border-[#4A4947]" />
          <div className="rounded-md mt-4 mb-4 text-2xl">Wedding 2</div>
        </div>
      </div>
      <div className="bg-[#D8D2C2] rounded-xl col-start-1 col-end-3 row-start-4 row-end-6 font-gambarino flex items-end">
        <p className="w-1/2 ml-4 text-xl mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          voluptatem quo voluptate iste consequuntur autem quisquam, similique
          quibusdam est vel non minus perferendis quae unde rerum repudiandae
          quia dolore velit?
        </p>
      </div>
      <div className="bg-[#B17457] rounded-xl col-start-3 col-end-4 row-start-4 row-end-6 flex flex-col ">
        <p className="text-white ml-4 text-xl mt-4">
          Have some <br /> questions ?
        </p>
        <h1 className="text-[3rem] font-gambarino ml-4 mt-48 text-white">
          Contact me
        </h1>
      </div>
      <div className="flex gap-8 bg-[#D8D2C2] rounded-xl col-start-4 col-end-6 row-start-5 row-end-6 font-gambarino text-[2rem] items-center justify-center">
        <Link href="/">Twitter</Link>
        <Link href="/">Instagram</Link>
        <Link href="/">Pinterest</Link>
      </div>
    </div>
  );
};
