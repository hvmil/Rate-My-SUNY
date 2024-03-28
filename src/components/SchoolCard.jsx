import React from "react";

export default function SchoolCard({ name, imageUrl, desc,permalink }) {
  return (
    // <div className="bg-opalFlame-200 rounded-lg overflow-hidden h-96 hover:scale-105 active:scale-105 transition-all shadow-lg">
    //   <a href="" className="grid grid-rows-2 text-white justify-center items-stretch hover:scale-100 active:scale-100">
    //     {/* <img src={imageUrl} className="rounded-t-lg row-span-1 col-span-1 w-full object-fit" alt="" /> */}
    //     <img src={imageUrl} className="row-span-1 col-span-1" alt="" />
    //     <div className="flex flex-col items-center justify-center">
    //       {/* <h2 className="text-2xl p-2 font-dealerplate font-semibold">
    //         {name}
    //       </h2> */}
    //       <p className="p-3 text-lg">{desc}</p>
    //     </div>
    //   </a>
    // </div>

    <a
      href={permalink}
      target="_blank"
      className="flex flex-col justify-between gap-3 border min-h-80 hover:border-green-400 transition-all p-5 rounded-md dark:bg-zinc-800 dark:border-zinc-700 bg-white dark:hover:border-green-400 "
    >
      <div className="flex flex-col gap-4">
        <div className=" h-[6rem] w-[6rem] relative">
          <img src={imageUrl} className="row-span-1 col-span-1" alt="" />
        </div>
        <h1 className="text-xl font-semibold text-slate-50">{name}</h1>
        <p className="text-lg text-slate-200 dark:text-gray-400">{desc}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
      </div>
    </a>
  );
}
