import React from "react";
import DisplayOneProduct from "./DisplayOneProduct";
import { useState } from "react";
import default_photo from "./../assets/default-product.png";
import ProductForm from "./ProductForm";

export default function InfoProd() {
  const [product, setProduct] = useState({
    ref: "",
    name: "",
    category: "",
    description: "",
    price: "",
    image: default_photo,
  });

  return (
    <div className="flex items-center w-full">
      <ProductForm setProduct={setProduct} /> <DisplayOneProduct product={product} />
    </div>
  );
}
