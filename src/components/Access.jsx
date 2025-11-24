// src/components/Access.jsx
import React from "react";

export default function Access() {
  return (
    <section className="w-full py-32 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* 小見出し */}
        <p className="text-xs tracking-[0.32em] text-gray-500 mb-3 text-center">
          ACCESS
        </p>

        {/* タイトル */}
        <h2
          className="
            text-[2rem] md:text-[2.3rem]
            font-light text-gray-900 
            leading-[1.35] text-center
          "
        >
          アクセス・営業時間
        </h2>

        {/* 仕切り線 */}
        <div className="w-full h-[1px] bg-gray-200 mt-14 mb-12"></div>

        {/* 2カラム */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ---- LEFT ---- */}
          <div className="pr-2">
            <h3 className="text-[1.25rem] font-medium text-gray-900 mb-4">
              ACTIVE DAYS（仮）
            </h3>

            <p className="text-gray-700 text-[0.95rem] leading-[1.85] mb-6">
              〒900-0000<br />
              沖縄県〇〇市〇〇 0-0-0<br />
              駅から徒歩3分
            </p>

            {/* 営業時間 */}
            <div>
              <p className="text-gray-900 font-medium text-[1.05rem] mb-1">
                営業時間
              </p>
              <p className="text-gray-700 text-[0.95rem] leading-[1.85]">
                24時間営業<br />
                スタッフ対応：10:00〜20:00
              </p>
            </div>
          </div>

          {/* ---- RIGHT：地図 ---- */}
          <div
            className="
              relative w-full h-[280px] md:h-[340px]
              rounded-2xl overflow-hidden
              shadow-[0_10px_40px_rgba(0,0,0,0.10)]
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...省略..."
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

            {/* ▼ 斜めライト（黒ではなく“光の気配”） */}
            <div
              className="
                absolute inset-0 pointer-events-none
                bg-gradient-to-br
                from-white/35 via-transparent to-transparent
                mix-blend-screen
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
