import MapVisual from "./Mapvisual";

export default function TrialCTA() {
  return (
    <div className="relative mt-32 rounded-3xl p-[2px] overflow-hidden">
      
      {/* GRADIENT FRAME */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500" />

      {/* INNER CONTENT */}
      <div className="relative z-10 rounded-[22px]">
        <div className="grid md:grid-cols-2 gap-16 p-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <p className="text-sm md:text-base opacity-90 tracking-wide">
              Love our tool?
            </p>

            <h3
              className="
                mt-4
                text-3xl md:text-4xl xl:text-5xl
                font-semibold
                leading-[1.1]
                tracking-tight
              "
            >
              Feel free to join our 15 days free trial
            </h3>

            <button
              className="
                mt-8 px-7 py-3 rounded-full
                bg-black text-white
                text-base font-medium
                hover:bg-black/80
                transition
              "
            >
              Download Template
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <MapVisual />

        </div>
      </div>
    </div>
  );
}
