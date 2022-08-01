import React from 'react';
import { Orders, Products, Reviews, Wishlist } from './';
import AddProduct from './Vendor/AddProduct';

export default function AccountContent(props) {
  const content = {
    Products: <Products />,
    Orders: <Orders />,
    Reviews: <Reviews />,
    'Add product': <AddProduct />,
    wishlist: <Wishlist />,
    Profile: '',
  };

  return <div className="w-10/12">{content[props.content] ? content[props.content] : null}</div>;
}