import React from 'react';
import Image from "next/image";

export default function Dashboard() {
  return (
    <section className="relative min-h-screen py-16 px-6">
      <div className='pointer-events-none absolute bottom-[01%] left-0 w-full h-[520px] bg-no-repeat bg-bottom bg-contain opacity-100 z-0'
        style={{
          backgroundImage: "url('/icons/Subtract.svg')",
          backgroundPosition: "center"
        }} />
      <div className="relative rounded scale-[0.80] bg-[#000] p-6 z-10 flex justify-center">
        <div className="w-full max-w-7xl  grid grid-cols-3 gap-6">

          {/* LEFT COLUMN - Tall card with list */}
          <div className="row-span-2 rounded-3xl bg-[#1e1f26] p-8 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex justify-center">
              <Image src="/icons/Vector.svg" alt="Logo" width={48} height={20} />
            </div>

            <Image src="/icons/Line 16.svg" alt="Divider" width={400} height={2} />

            {/* List items */}
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <Image
                  key={i}
                  src="/icons/Group 116.svg"
                  alt="List item"
                  width={350}
                  height={50}
                  className="opacity-90 m-auto"
                />
              ))}
            </div>

            {/* User avatar at bottom */}
            <div className="mt-auto flex justify-center">
              <Image
                src="/icons/Group 121.svg"
                alt="User"
                width={140}
                height={100}
                className="opacity-90"
              />
            </div>
          </div>

          {/* TOP CENTER - Circular progress chart */}
          <div className="rounded-3xl bg-[#1e1f26] p-6 flex items-center justify-center">
            <Image
              src="/icons/Group 115.svg"
              alt="Circular chart"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>

          {/* TOP RIGHT - User list */}
          <div className="rounded-3xl bg-[#1e1f26] p-8 flex flex-col gap-4">
            {[
              "Group 112",
              "Group 108",
              "Group 109",
              "Group 110",
              "Group 111",
            ].map((img, i) => (
              <Image
                key={i}
                src={`/icons/${img}.svg`}
                alt="User row"
                width={280}
                height={64}
                className="opacity-90"
              />
            ))}
          </div>

          {/* BOTTOM CENTER - Bar chart */}
          <div className="rounded-3xl bg-[#1e1f26] p-6 flex flex-col items-center gap-4">
            <Image
              src="/icons/Group 112.svg"
              alt="Chart header"
              width={280}
              height={60}
            />

            <Image
              src="/icons/Line 16.svg"
              alt="Divider"
              width={280}
              height={2}
            />

            <Image
              src="/icons/Group 132.png"
              alt="Bar chart"
              width={300}
              height={140}
            />
          </div>

          {/* BOTTOM RIGHT - Empty placeholder */}
          <div className="rounded-3xl bg-[#1e1f26] p-6 flex items-center justify-center">
            <Image
              src="/icons/Rectangle 46.svg"
              alt="Placeholder"
              width={240}
              height={100}
              className="opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}