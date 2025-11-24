// src/components/Trainer.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Trainer() {
  return (
    <section className="w-full py-32 px-6 md:px-10 bg-white fade-up">
      {/* タイトル */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <p className="text-xs tracking-[0.35em] text-gray-500 mb-3">TRAINER</p>
        <h2 className="text-[2rem] md:text-[2.4rem] font-light text-gray-900 leading-[1.35]">
          あなたを導く、専門トレーナー。
        </h2>
      </div>

      {/* ▼ Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        speed={800}
        grabCursor={true}
        navigation={{
          nextEl: ".trainer-next",
          prevEl: ".trainer-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: "trainer-bullet",
          bulletActiveClass: "trainer-bullet-active",
        }}
        className="max-w-5xl mx-auto relative"
      >
        {/* === TRAINER 1 === */}
        <SwiperSlide>
          <TrainerCard
            img="/trainer.png"
            name="山本 奈々"
            role="パーソナルトレーナー／ボディメイク指導歴 7年"
            text="あなたのペースを大切にしながら、正しいフォームから習慣づくりまで丁寧にサポートします。無理なく前に進める環境づくりがモットーです。"
          />
        </SwiperSlide>

        {/* === TRAINER 2 === */}
        <SwiperSlide>
          <TrainerCard
            img="/trainer1.png"
            name="佐藤 陽介"
            role="コンディショニング／アスリートサポート"
            text="体の使い方・姿勢改善に特化。ケガをしにくい動作づくりと効率的なトレーニングで、理想のスタイルへ最短ルートを提案します。"
          />
        </SwiperSlide>

        {/* === TRAINER 3 === */}
        <SwiperSlide>
          <TrainerCard
            img="/trainer2.png"
            name="Mika"
            role="ダイエットプランナー／女性専門指導"
            text="女性の体に合わせたメソッドで、美しいラインづくりをサポート。食事・姿勢・生活習慣までトータルでアプローチします。"
          />
        </SwiperSlide>

        {/* ▼ Navigation Buttons */}
        <div className="trainer-prev absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black text-[1.8rem] cursor-pointer select-none pl-2">
          ‹
        </div>
        <div className="trainer-next absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black text-[1.8rem] cursor-pointer select-none pr-2">
          ›
        </div>
      </Swiper>

      {/* ▼ カスタム Pagination（下部ドット） */}
      <style>{`
        .trainer-bullet {
          background: #ccc;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          margin: 0 6px !important;
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .trainer-bullet-active {
          background: #111;
          opacity: 1;
          width: 10px;
          height: 10px;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  trainer カード (再利用可能)                                   */
/* -------------------------------------------------------------- */
function TrainerCard({ img, name, role, text }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* 画像 */}
      <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
        <img
          src={img}
          alt={name}
          className="w-full h-[530px] object-cover"
        />
      </div>

      {/* テキスト */}
      <div>
        <h3 className="text-[2rem] font-light text-gray-900 leading-[1.35] mb-3">
          {name}
        </h3>

        <p className="text-gray-500 text-[0.9rem] mb-4">{role}</p>

        <p className="text-gray-600 text-[1rem] leading-[1.85]">{text}</p>
      </div>
    </div>
  );
}
