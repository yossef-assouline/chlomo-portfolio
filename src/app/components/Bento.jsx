import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Bento = () => {
  return (
    <div className="bg-black h-screen p-4 grid gap-3 grid-cols-5 grid-rows-5 ">
      <nav className="flex justify-between w-full border border-black bg-[#D8D2C2] rounded-xl col-start-1 col-end-6 row-start-1 row-end-2 items-center font-satoshi">
        <h1 className="ml-6 font-gambarino text-[2rem]">LOGO</h1>
        <div className="mr-6 gap-8 flex text-2xl">
          <Link href="/">About</Link>
          <Link href="/">Weddings</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
      <div className="bg-[#D8D2C2]  pl-4 rounded-md col-start-1 col-end-3 row-start-2 row-end-4 font-gambarino text-[3.5rem] flex justify-center flex-col">
        Creating magic memories for your
        special day
      </div>
      <div className="rounded-md col-start-3 col-end-4">
        <Image
          src="https://placehold.co/400x375"
          width={400}
          height={350}
          alt="profile"
          className="rounded-md"
          // optional: you can add loading="lazy" or priority={true}
        />
      </div>
      <div className="bg-[#D8D2C2] rounded-md col-start-4 col-end-6 row-start-2 row-end-5 flex flex-col p-6">
        <h1>First Dance</h1>
        <Image
          src="https://placehold.co/600x300"
          width={600}
          height={300}
          alt="profile"
          className="rounded-md"
          // optional: you can add loading="lazy" or priority={true}
        />
        <div className="rounded-md mt-4 mb-4 ">hey</div>
        <hr />
        <div className="rounded-md mt-4 mb-4">ok</div>
        <hr />
      </div>
      <div className="bg-[#D8D2C2] rounded-md col-start-1 col-end-2 row-start-4 row-end-6">
        about
      </div>
      <div className="bg-[#4A4947] rounded-md col-start-2 col-end-4 row-start-4 row-end-6">
        contact me
      </div>
      <div className="flex gap-4 bg-[#D8D2C2] rounded-md col-start-4 col-end-6 row-start-5 row-end-6">
        <Link href="/">links</Link>
        <Link href="/">links</Link>
        <Link href="/">links</Link>
      </div>
    </div>
  );
};
