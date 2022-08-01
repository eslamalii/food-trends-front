import React from "react";
import { Link } from "react-router-dom";
import { ProductIcons } from ".";
import { ProductRating } from "../UI";

export default function Product({ productDetails, relative }) {
  let route = `${relative ? "/shop" : "shop"}/${productDetails.id}`;
  return (
    <div className="group flex  flex-col gap-3 ">
      <div className="relative overflow-hidden">
        <Link to={route} className=" bg-black">
          <img
            src={productDetails.images[0]}
            alt={productDetails.name}
            className="transition-all duration-1000 ease-out hover:scale-110"
          />
        </Link>

        <ProductIcons
          className="absolute -bottom-16 flex w-full justify-center gap-3 py-4  px-8 transition-all  duration-300 group-hover:bottom-0 "
          productDetails={productDetails}
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link
          to={route}
          className="font-satoshi text-lg font-semibold hover:text-primary"
        >
          {productDetails.name}
        </Link>
        <h4 className="font-satoshi text-lg font-extrabold text-primary">
          ${productDetails.price.toFixed(2)}
        </h4>

        <div>
          <ProductRating rating={productDetails.rating} />
        </div>
      </div>
    </div>
  );
}