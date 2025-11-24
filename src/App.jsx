// App.jsx
import React, { useEffect } from "react";

// Sections
import Hero from "./components/Hero";
import Lead from "./components/Lead";
import Facility from "./components/Facility";
import Trainer from "./components/Trainer";
import Price from "./components/Price";
import CTA from "./components/CTA";
import Access from "./components/Access";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  // ★ 全体アニメーションを一括適用
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
   <div className="bg-white">

       <Header />
      {/* ===== HERO（広告の顔） ===== */}
      <Hero />

      {/* ===== LEAD（安心・入りやすさ） ===== */}
      <Lead />

      {/* ===== FACILITY（信用アップ） ===== */}
      <Facility />

      {/* ===== TRAINER（信頼感） ===== */}
      <Trainer />

      {/* ===== PRICE（料金プラン） ===== */}
      <Price />
      {/* ===== CTA（行動喚起） ===== */}
      <CTA />
      {/* ===== ACCESS（アクセス・営業時間） ===== */}
      <Access />
      {/* ===== FOOTER（フッター） ===== */}
      <Footer />
    </div>
  );
}

export default App;
