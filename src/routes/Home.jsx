import React from "react";
import {
  Hero,
  PopularProducts,
  QualityShoes,
  Services,
  SpecialOffers,
  Testimonials,
  Newsletter,
  Footer,
} from "../Sections";

export default function Home() {
  return (
    <div className="px-8 lg:px-16">
      <Hero />
      <hr></hr>
      <PopularProducts />
      <QualityShoes />
      <hr></hr>
      <Services />
      <SpecialOffers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
