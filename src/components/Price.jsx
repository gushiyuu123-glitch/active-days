// src/components/Price.jsx
import React, { useRef, useEffect } from "react";

export default function Price() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && el.classList.add("show")),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        opacity-0 translate-y-10
        transition-all duration-[1000ms]
        ease-[cubic-bezier(.18,.55,.25,1)]
        w-full py-32 px-6 md:px-10 bg-white
      "
    >
      {/* --- TITLE --- */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <p className="text-xs tracking-[0.32em] text-gray-500 mb-3">
          PRICE
        </p>
        <h2 className="text-[2rem] md:text-[2.4rem] font-light text-gray-900 leading-[1.35]">
          わかりやすく、始めやすい料金プラン。
        </h2>
      </div>

      {/* --- MAIN PLANS --- */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        {/* ▼ 24時間ジムプラン */}
        <div
          className="
            border border-gray-200 rounded-2xl p-10
            shadow-[0_8px_32px_rgba(0,0,0,0.06)]
            hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)]
            transition-shadow duration-300
          "
        >
          <h3 className="text-[1.35rem] font-medium text-gray-900 mb-7">
            24時間ジムプラン
          </h3>

          <div className="mb-7">
            <p className="text-[2.7rem] font-light text-gray-900 leading-none">
              ¥6,980
              <span className="text-[1rem] text-gray-500 ml-1"> / 月</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              初心者から経験者まで、誰でも使いやすい。
            </p>
          </div>

          <ul className="text-gray-600 text-[0.95rem] leading-[1.9] space-y-2 mb-10">
            <li>・24時間いつでも利用可能</li>
            <li>・全マシン使い放題</li>
            <li>・ロッカー・シャワー利用無料</li>
          </ul>

        
        </div>

        {/* ▼ パーソナルプラン */}
        <div
          className="
            border border-black rounded-2xl p-10
            shadow-[0_10px_36px_rgba(0,0,0,0.14)]
            hover:shadow-[0_14px_46px_rgba(0,0,0,0.22)]
            transition-shadow duration-300
          "
        >
          <h3 className="text-[1.35rem] font-medium text-black mb-7">
            パーソナル＋ジムプラン
          </h3>

          <div className="mb-7">
            <p className="text-[2.7rem] font-light text-black leading-none">
              ¥12,800
              <span className="text-[1rem] text-gray-600 ml-1"> / 月</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              専属トレーナーが「続く習慣」をサポート。
            </p>
          </div>

          <ul className="text-gray-600 text-[0.95rem] leading-[1.9] space-y-2 mb-10">
            <li>・月2回のパーソナルトレーニング</li>
            <li>・専用メニュー作成</li>
            <li>・24時間ジム利用OK</li>
            <li>・食事＆生活アドバイス</li>
          </ul>

        
        </div>
      </div>

      {/* --- ONE DAY PLAN --- */}
      <div className="max-w-5xl mx-auto mt-20">
        <div
          className="
            border border-gray-200 rounded-2xl p-8
            shadow-[0_8px_28px_rgba(0,0,0,0.06)]
            bg-white
          "
        >
          <h3 className="text-[1.2rem] font-medium text-gray-900 mb-3">
            【単発利用】1DAY ドロップイン
          </h3>

          <p className="text-[1.9rem] font-light text-gray-900 leading-none mb-2">
            ¥1,000
            <span className="text-[1rem] text-gray-500 ml-1"> / 回</span>
          </p>

          <p className="text-gray-600 text-[0.95rem] leading-[1.85]">
            旅行中・出張中の方に最適。入会不要で1回から利用できます。
          </p>
        </div>
      </div>

      {/* --- 入会金 --- */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <p className="text-gray-600 text-[0.95rem] leading-[1.9]">
          入会金：<span className="font-medium text-gray-900">¥5,000</span><br />
          ※ パーソナルプラン入会で <span className="text-black font-medium">入会金無料</span>
    w    </p>
      </div>
    </section>
  );
}
