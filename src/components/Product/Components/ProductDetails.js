import React from "react";
import {
  Typography,
  ProductRating,
  Button,
  QauntityBox,
  Accordion,
} from "../../UI";
import { CgStopwatch } from "react-icons/cg";
import { AiOutlineCalendar, AiFillCheckCircle } from "react-icons/ai";
import { Info } from "../";

export default function ProductDetails({ product, className, miny = false }) {
  const item = product;
  return (
    <div className={`flex  w-full flex-col gap-4 p-6 lg:w-1/2 ${className}`}>
      <Typography
        component="subtitle2"
        className="font-satoshi text-3xl font-extrabold text-primary"
      >
        ${item.price.toFixed(2)}
      </Typography>
      <Typography
        component="subtitle2"
        className="font-satoshi text-3xl font-extrabold"
      >
        {item.name}
      </Typography>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-satoshi font-semibold">5.00</span>
          <ProductRating rating={item.rating} />
        </div>
        <Typography component="body2" className="font-satoshi font-semibold ">
          {item.reviews} reviews
        </Typography>
      </div>
      <Typography component="body2" className="font-satoshi font-semibold ">
        {item.description}
      </Typography>
      <div className="flex items-center gap-2">
        <CgStopwatch size={22} />
        <span className="font-satoshi font-medium">
          {item.inStock} in stock
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <AiOutlineCalendar size={22} />
        <span className="font-satoshi font-bold text-base-400">
          Get it between
        </span>
        <span className="font-satoshi font-bold">Jul 24 - Jul 31,2022</span>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <span className="font-satoshi text-lg font-bold">Quantity</span>
        <QauntityBox max={item.inStock} />
        <div className="flex flex-wrap items-center gap-2">
          <AiFillCheckCircle size={22} className="text-[#68b65b]" />
          <span className="font-satoshi text-sm font-semibold text-base-400">
            {item.inStock} in stock
          </span>
        </div>
      </div>
      <Button variant="primary" className="my-5">
        Add to Cart
      </Button>
      <Info category={product.category} />
      {!miny && (
        <Accordion
          title="SHIPPING AND RETURN"
          description="We understand that you are often looking for the most cost-effective solution to get your purchase to your home. For online purchases around the area, we offer in-home delivery for $50. Please contact our store if you would like more information on local delivery. The estimated shipping time is between 4-21 working days. Returned items must be new and in unused condition. A few of our vendors may be excluded from our return policy. Any exceptions are noted on the page of the item."
        />
      )}
    </div>
  );
}