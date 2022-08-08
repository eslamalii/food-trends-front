import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/slices/orders";
import { Button, Typography } from "../UI";
import { selectUserData } from "../../store/slices/auth";
import { fetchProducts, productsSelector } from "../../store/slices/products";

import Radio from "../UI/Form/Radio";
import axios from "axios";
import { cookie } from "../../services";

const filters = ["all orders", "completed", "pending", "canceled"];

export default function Orders() {
  // const [ordersData, setOrdersData] = useState([]);

  const [products, setProducts] = useState([]);
  const [filterBtn, setFilterBtn] = useState("");

  const { userType } = useSelector(selectUserData);

  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const handleChange = (event) => {
    setSelected(event.target.value);
    if (selected === "highest") {
    } else {
    }
  };
  const handleOrderStatFilter = (filter) => setFilterBtn(filter);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let url = "http://localhost:3000/api/v1/vendor/orders?";
    url +=
      selected === "lowest"
        ? "sortBy=totalPrice&"
        : selected === "highest"
        ? "sortBy=totalPrice:desc&"
        : "";
    if (filterBtn === "pending") url += "status=pending&";
    else if (filterBtn === "canceled") url += "status=canceled&";
    else if (filterBtn === "completed") url += "status=completed&";

    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVkMjdmNDUzOWI1NTc0Y2FiM2YyMDIiLCJpYXQiOjE2NTk5OTE0MTAsImV4cCI6MTY2MDI1MDYxMH0.z9j_EtY9J6xkWhWKR5eJQMKRwrY7Llrst7dQTL3UPDI";
    const token = cookie.getCookie("token");
    const fetchData = async () => {
      const response = await axios.get(url, {
        headers: { Authorization: "Bearer " + token },
      });

      const json = response.data;
      setProducts(json);
    };

    fetchData();
  }, [selected, filterBtn]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = {
    vendor: () => {
      return (
        <>
          <Typography component="h2" className="p-5 text-primary">
            your orders
          </Typography>

          <div className="m-5 flex flex-col justify-between xl:w-[1200px] xl:flex-row">
            <div>
              {filters.map((filter, index) => {
                return (
                  <Button
                    variant="user-account"
                    className="w-32 capitalize hover:bg-primary"
                    key={index}
                    onClick={(e) => handleOrderStatFilter(e.target.value)}
                    value={filter}
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio
                name={"price"}
                value="highest"
                checked={selected}
                onChange={handleChange}
              >
                Highest
              </Radio>
              <Radio
                name={"price"}
                checked={selected}
                onChange={handleChange}
                value="lowest"
              >
                Lowest
              </Radio>
            </div>
          </div>

          {/* {selected === 'highest' ? <div className="bg-red-400">test</div> : ''} */}

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-10">Order ID</p>
                <p className="w-32">Customer</p>
                <p className="w-32">Order Status</p>
                <p className="w-32">Order Date</p>
                <p className="w-32">Delivery Date</p>
                <p className="w-32">Total Price</p>
                <p className="w-32">Payment Method</p>
                <p className="w-32"></p>
              </div>

              {products.map((order, index) => {
                return (
                  <div
                    className="flex w-full items-center border-b p-3 text-center"
                    key={index}
                  >
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w-32 break-words">{order.customer.name}</p>
                    {order.status === "pending" ? (
                      <p className="w-32 text-lg font-medium capitalize text-yellow-400 ">
                        {order.status}
                      </p>
                    ) : order.status === "completed" ? (
                      <p className="w-32 text-lg font-medium capitalize text-green-400">
                        {order.status}
                      </p>
                    ) : (
                      <p className="w-32 text-lg font-medium capitalize text-red-400">
                        {order.status}
                      </p>
                    )}
                    <p className="w-32">{order.createdAt.slice(0, 10)}</p>
                    <p className="w-32">Not assigned</p>
                    <p className="w-32">{order.totalPrice.toFixed(2)} LE</p>
                    <p className="w-32">Credit Card</p>
                    <p className="w-32">
                      <Button variant="user-account" className="tracking-tight">
                        order details
                      </Button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    },
    customer: () => {
      return (
        <>
          <Typography component="h2" className="p-5 text-primary">
            your orders
          </Typography>

          <div className="m-5 flex flex-col justify-between xl:w-[1200px] xl:flex-row">
            <div>
              {filters.map((filter, index) => {
                return (
                  <Button
                    variant="user-account"
                    className="w-32 hover:bg-primary"
                    key={index}
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio
                name={"price"}
                value="highest"
                checked={selected}
                onChange={handleChange}
              >
                Highest
              </Radio>
              <Radio
                name={"price"}
                checked={selected}
                onChange={handleChange}
                value="lowest"
              >
                Lowest
              </Radio>
            </div>
          </div>

          {/* {selected === 'highest' ? <div className="bg-red-400">test</div> : ''} */}

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-10">Order ID</p>
                <p className="w-32">Product</p>
                <p className="w-32">Price</p>
                <p className="w-32">Order Status</p>
                <p className="w-32">Order Date</p>
                <p className="w-32">Delivery Date</p>
                <p className="w-32">Payment Method</p>
                <p className="w-32"></p>
              </div>

              {products.map((rev, index) => {
                return (
                  <div
                    className="flex w-full items-center border-b p-3 text-center"
                    key={index}
                  >
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w-32 break-words">{rev.name}</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-48">
                      <Button variant="user-account">order details</Button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    },
    delivery: () => {
      return (
        <>
          <Typography component="h2" className="p-5 text-primary">
            your orders
          </Typography>

          <div className="m-5 flex flex-col justify-between xl:w-[1200px] xl:flex-row">
            <div>
              {filters.map((filter, index) => {
                return (
                  <Button
                    variant="user-account"
                    className="w-32 hover:bg-primary"
                    key={index}
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio
                name={"price"}
                value="highest"
                checked={selected}
                onChange={handleChange}
              >
                Highest
              </Radio>
              <Radio
                name={"price"}
                checked={selected}
                onChange={handleChange}
                value="lowest"
              >
                Lowest
              </Radio>
            </div>
          </div>

          {/* {selected === 'highest' ? <div className="bg-red-400">test</div> : ''} */}

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-10">Order ID</p>
                <p className="w-32">Customer</p>
                <p className="w-32">Order Status</p>
                <p className="w-32">Order Date</p>
                <p className="w-32">Delivery Date</p>
                <p className="w-32">Total Price</p>
                <p className="w-32">Payment Method</p>
                <p className="w-32"></p>
              </div>

              {products.map((rev, index) => {
                return (
                  <div
                    className="flex w-full items-center border-b p-3 text-center"
                    key={index}
                  >
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w-32 break-words">{rev.name}</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">Not assigned</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">
                      <Button variant="user-account" className="tracking-tight">
                        order details
                      </Button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    },
  };

  return orders[userType] ? orders[userType]() : null;
}
