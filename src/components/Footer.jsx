// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-white pt-24 pb-14 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* ===== 1px 上ライン ===== */}
        <div className="w-full h-[1px] bg-white/10 mb-16"></div>

        {/* ===== 3カラム ===== */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h2 className="text-[1.85rem] font-light tracking-[0.02em] mb-4">
              ACTIVE DAYS
            </h2>
            <p className="text-white/60 text-[0.9rem] leading-[1.9] max-w-xs">
              明るく通いやすい、24時間フィットネスジム。
              <br />
              人が続けられる“ちょうど良い習慣”を届ける。
            </p>
          </div>

          {/* MENU */}
          <div>
            <p className="text-[0.95rem] font-medium tracking-wide mb-4">
              MENU
            </p>
            <ul className="space-y-2.5 text-white/70 text-[0.9rem] leading-[1.7]">
              <li>・施設紹介</li>
              <li>・トレーナー</li>
              <li>・料金プラン</li>
              <li>・アクセス</li>
            </ul>
          </div>

          {/* ACCESS */}
          <div>
            <p className="text-[0.95rem] font-medium tracking-wide mb-4">
              ACCESS
            </p>
            <p className="text-white/70 text-[0.9rem] leading-[1.9] max-w-xs">
              〒900-0000
              <br />
              沖縄県〇〇市〇〇 0-0-0
              <br />
              営業時間：24時間
              <br />
              スタッフ対応：10:00〜20:00
            </p>
          </div>
        </div>

        {/* ===== 1px 下ライン ===== */}
        <div className="w-full h-[1px] bg-white/10 mt-16 mb-10"></div>

        {/* COPYRIGHT & DESIGN LINK */}
        <div className="text-center space-y-3">

          {/* コピーライト */}
          <p className="text-white/35 text-[0.8rem] tracking-wide">
            © {new Date().getFullYear()} ACTIVE DAYS — All Rights Reserved.
          </p>

          {/* ▼ GUSHIKEN DESIGN link  */}
          <a
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              text-[0.75rem]
              tracking-[0.25em]
              text-white/30
              hover:text-white/70
              transition-all
              duration-300
              select-none
            "
          >
            Designed by GUSHIKEN DESIGN
          </a>
        </div>
      </div>
    </footer>
  );
}
