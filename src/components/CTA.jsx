// src/components/CTA.jsx
import React from "react";

export default function CTA() {
  return (
    <section
      className="
        w-full py-28 px-6 md:px-10 
        bg-gradient-to-b from-white to-[#f7f7f7]
      "
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="
            text-[1.9rem] md:text-[2.3rem]
            font-light text-gray-900 leading-[1.4]
          "
        >
          見学・体験は、毎日受付しています。
        </h2>

        <p className="mt-4 text-gray-600 text-[1rem] leading-[1.9] max-w-xl mx-auto">
          まずはお気軽にお越しください。スタッフが丁寧にご案内します。
        </p>

        <button
          className="
            mt-10
            bg-black text-white
            py-4 px-12
            rounded-full
            text-[1.05rem] font-medium
            shadow-[0_6px_22px_rgba(0,0,0,0.16)]
            hover:opacity-90 transition
          "
        >
          見学・体験のご予約はこちら
        </button>
      </div>
    </section>
  );
}
