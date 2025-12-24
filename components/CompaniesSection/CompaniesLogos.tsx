import Image from "next/image";

const logos = [
  { name: "Smile", src: "/icons/Frame.svg" },
  { name: "Urban", src: "/icons/Group-96.svg" },
  { name: "Natural", src: "/icons/Group-97.svg" },
  { name: "Wave", src: "/icons/Group-98.svg" },
  { name: "Happy", src: "/icons/Group-99.svg" },
  { name: "Alisa", src: "/icons/Group-100.svg" },
];

export default function CompaniesLogos() {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-5">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="
            px-11 py-6 rounded-xl
            bg-black/60 backdrop-blur
            shadow-inner
            transition-all duration-300
            hover:bg-black/80 hover:scale-105
            flex items-center justify-center   /* 👈 THIS */
          "
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={60}
            height={20}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
}
