// src/components/Lead.jsx
import React, { useEffect, useRef } from "react";
import subImg from "../assets/lead.png"; // ← サブ写真（後で差し替えOK）

export default function Lead() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        opacity-0 translate-y-8
        transition-all duration-[900ms]
        ease-[cubic-bezier(.18,.55,.25,1)]
        w-full py-28 px-6 md:px-12 bg-white
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ===== 左：テキスト（雑誌広告スタイル） ===== */}
        <div>

          {/* 小見出し（縦情報 → 高級感） */}
          <p className="
            text-[0.8rem] tracking-[0.28em]
            text-gray-500 mb-5
          ">
            CONCEPT
          </p>

          {/* タイトル */}
          <h2 className="
            text-[2rem] md:text-[2.6rem]
            font-light text-gray-900
            leading-[1.46] mb-7 fade-up
          ">
            無理なく続けられる、<br />
            “ちょうど良いフィットネス”を。
          </h2>

          {/* 説明文 */}
          <p className="text-gray-600 text-[1.05rem] leading-[1.9] max-w-[520px]">
            忙しくても、初心者でも、経験者でも。
            <br />
            使いやすさと安全性を備えた最新マシンと、
            <br />
            明るく通いやすい空間で、
            あなたの毎日に無理のない健康習慣をつくります。
          </p>
        </div>

        {/* ===== 右：小さめサブ写真（広告の深度） ===== */}
        <div className="relative">
          <img
            src={subImg}
            alt="facility"
            className="
              w-full rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              object-cover
            "
          />
        </div>

      </div>
    </section>
  );
}
