import React from "react";
import { ImageSection, ProductDetails, SimilarProducts } from "./index";
export default function Product({ id }) {
  // Fetch Item Here and send each Details to Components
  return (
    <div className=" flex flex-col  flex-wrap justify-center gap-2 py-4">
      <div className="container flex   flex-wrap justify-center gap-2 py-4">
        <ImageSection />
        <ProductDetails />
      </div>

      <SimilarProducts />
    </div>
  );
}
