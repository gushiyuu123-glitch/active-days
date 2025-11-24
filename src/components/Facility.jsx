// src/components/Facility.jsx
import React, { useRef, useEffect } from "react";
import heroFacility from "../assets/facility-main.png";
import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/machine2.png";
import img5 from "../assets/shower.png";

const items = [
  {
    title: "有酸素マシン",
    desc: "走りやすく負荷調整しやすい最新モデルを導入。",
    img: img1,
  },
  {
    title: "ウェイトマシン",
    desc: "筋力アップに最適。自然な軌道でケガしにくい設計。",
    img: img2,
  },
  {
    title: "フリーウェイト",
    desc: "ラック・ダンベルを完備した本格トレーニングゾーン。",
    img: img3,
  },
  {
    title: "ロッカー・シャワー",
    desc: "清潔で使いやすい更衣室＆パウダーエリア。",
    img: img5,
  },
];

export default function Facility() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("show")),
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-24 bg-white">

   <div className="relative w-full h-[380px] md:h-[480px]">
  <img
    src={heroFacility}
    className="w-full h-full object-cover"
    alt=""
  />

  {/* ▼ 斜めライト（追加） */}
  <div
    className="
      absolute inset-0
      pointer-events-none
      bg-gradient-to-br
      from-white/35 via-white/8 to-transparent
      mix-blend-screen
      transform rotate-[-2deg]
    "
  />

  {/* 白帯（情報帯） */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent flex items-center">
    <div className="pl-10 md:pl-16 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.4)]">
      <h2 className="text-[1.9rem] md:text-[2.3rem] font-light leading-[1.4] fade-up">
        最新の設備で、<br />
        効率よく、気持ちよく。
      </h2>
      <p className="mt-4 text-white/90 max-w-md leading-[1.9]">
        使いやすさ × 安全性を重視したマシンを揃え、
        明るく開放的な空間で快適にトレーニングできます。
      </p>
    </div>
  </div>
</div>

{/* ▼ 主要4設備：非対称レイアウト（サイズUP版） */}
<div className="max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-20 px-6">

  {/* --- 上段：左ワイド --- */}
  <div className="md:col-span-2 grid md:grid-cols-3 gap-12 items-stretch">

    {/* 左ワイド（深度強） */}
    <div className="
      md:col-span-2 group relative rounded-2xl overflow-hidden
      shadow-[0_14px_45px_rgba(0,0,0,0.22)]
      translate-y-[8px]
    ">
      <img
        src={img1}
        className="w-full h-[330px] md:h-[380px] object-cover 
        group-hover:scale-[1.045] transition-all duration-500"
      />
      <div className="
        absolute inset-0 bg-gradient-to-br
        from-black/60 via-black/20 to-transparent
      "></div>

      <div className="absolute bottom-7 left-8 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
        <p className="text-[1.35rem] font-medium">有酸素マシン</p>
        <p className="text-sm mt-1 text-white/85">
          走りやすく負荷調整しやすい最新モデルを導入。
        </p>
      </div>
    </div>

    {/* 右ミドル（上にズラし） */}
    <div className="
      group relative rounded-2xl overflow-hidden 
      shadow-[0_12px_40px_rgba(0,0,0,0.18)]
      -translate-y-[10px]
    ">
      <img
        src={img2}
        className="w-full h-[330px] object-cover 
        group-hover:scale-[1.045] transition-all duration-500"
      />
      <div className="
        absolute inset-0 bg-gradient-to-br
        from-black/55 via-black/15 to-transparent
      "></div>

      <div className="absolute bottom-7 left-8 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
        <p className="text-[1.25rem] font-medium">ウェイトマシン</p>
        <p className="text-sm mt-1 text-white/85">
          筋力アップに最適。自然な軌道でケガしにくい設計。
        </p>
      </div>
    </div>

  </div>


  {/* --- 下段：左ミドル（影強め） --- */}
  <div className="
    group relative rounded-2xl overflow-hidden 
    shadow-[0_12px_40px_rgba(0,0,0,0.20)]
    translate-y-[6px]
  ">
    <img
      src={img3}
      className="w-full h-[300px] md:h-[350px] object-cover
      group-hover:scale-[1.045] transition-all duration-500"
    />
    <div className="
      absolute inset-0 bg-gradient-to-br
      from-black/55 via-black/15 to-transparent
    "></div>

    <div className="absolute bottom-7 left-8 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
      <p className="text-[1.25rem] font-medium">フリーウェイト</p>
      <p className="text-sm mt-1 text-white/85">
        ラック・ダンベルを完備した本格トレーニングゾーン。
      </p>
    </div>
  </div>


  {/* --- 下段：右ワイド（浮かせる × 深度強） --- */}
  <div className="
    group relative rounded-2xl overflow-hidden 
    shadow-[0_14px_45px_rgba(0,0,0,0.24)]
    -translate-y-[8px]
  ">
    <img
      src={img5}
      className="w-full h-[300px] md:h-[350px] object-cover
      group-hover:scale-[1.045] transition-all duration-500"
    />
    <div className="
      absolute inset-0 bg-gradient-to-br
      from-black/60 via-black/15 to-transparent
    "></div>

    <div className="absolute bottom-7 left-8 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
      <p className="text-[1.25rem] font-medium">ロッカー・シャワー</p>
      <p className="text-sm mt-1 text-white/85">
        清潔で使いやすい更衣室＆パウダーエリア。
      </p>
    </div>
  </div>

</div>


    </section>
  );
}
