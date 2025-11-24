import React from "react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] md:h-screen overflow-hidden">

      {/* ===== 背景画像（スマホで左右が切れない最適化） ===== */}
      <img
        src={heroImg}
        alt="hero"
        className="
          absolute inset-0 w-full h-full 
          object-cover
          object-[50%_32%]        /* ← スマホ時に頭〜顔が切れない */
          md:object-center
        "
      />

      {/* ===== レイヤー1：右を整える薄い光 ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-l
          from-black/20 via-black/8 to-transparent
          pointer-events-none
        "
      />

      {/* ===== レイヤー2：中央〜左上の視認性UP（超薄） ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/10 via-transparent to-transparent
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/*    左上：ブランドコピー（静かに配置）    */}
      {/* ===================================== */}
      <div
        className="
          absolute
          top-[12vh] left-[6vw]
          md:top-[18vh]
          z-20
        "
      >
        {/* 背面の視認性UP（透明な薄膜） */}
        <div
          className="
            absolute -inset-x-4 -inset-y-2
            bg-gradient-to-r
            from-black/15 via-black/8 to-transparent
            rounded-md
            backdrop-blur-[1.5px]
          "
        />

        {/* ACTIVE DAYS */}
        <p
          className="
            relative
            text-white/90
            text-[0.75rem] md:text-[0.9rem]
            tracking-[0.32em]
            font-light
            drop-shadow-[0_3px_14px_rgba(0,0,0,0.65)]
          "
        >
          ACTIVE DAYS
        </p>

        {/* Better Life. */}
        <h2
          className="
            relative
            mt-1
            text-white
            text-[1.9rem] md:text-[2.8rem]
            font-light
            leading-[1.08]
            drop-shadow-[0_5px_20px_rgba(0,0,0,0.55)]
          "
        >
          Better Life.
        </h2>
      </div>

      {/* ===================================== */}
      {/*      右下：メインコピー（主役）         */}
      {/* ===================================== */}
      <div
        className="
          relative z-20
          w-full h-full
          flex items-end justify-end
          pb-[11vh] md:pb-[13vh]
          pr-[7vw] md:pr-[9vw]
        "
      >
        <div className="text-right max-w-[540px]">

          {/* タイトル */}
          <h1
            className="
              text-white
              text-[1.9rem] md:text-[3.15rem]
              leading-[1.32]
              tracking-tight
              drop-shadow-[0_7px_22px_rgba(0,0,0,0.36)]
            "
          >
            理想の自分に、<br />
            ほんの少しだけ毎日を。
          </h1>

          {/* サブコピー */}
          <p
            className="
              mt-4 md:mt-5
              text-white/90
              text-[0.9rem] md:text-[1.05rem]
              leading-[1.9]
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.32)]
            "
          >
            明るく通いやすい、24時間フィットネスジム。
          </p>

          {/* CTA */}
          <button
            className="
              mt-7 md:mt-9
              bg-white text-black
              py-3 md:py-[14px]
              px-8 md:px-11
              rounded-full
              text-[0.9rem] md:text-[1rem]
              font-medium
              shadow-[0_4px_16px_rgba(0,0,0,0.32)]
              hover:opacity-90
              transition-all duration-300
            "
          >
            見学・体験はこちら
          </button>

        </div>
      </div>

    </section>
  );
}
