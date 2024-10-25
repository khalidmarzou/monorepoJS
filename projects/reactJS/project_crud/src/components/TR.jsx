import { useState } from "react";

export default function TR({ product, selectProduct, productsSelected, letsUpdate, updateProduct }) {
  const selected = productsSelected.some((p) => p.id === product.id);
  const [productUpdated, setProductUpdated] = useState({ ...product });

  return (
    <tr
      className={`border-b hover:bg-gray-100 cursor-pointer ${selected ? "bg-red-50" : "bg-white"}`}
      tabIndex={1}
      onClick={() => selectProduct(product)}
    >
      {letsUpdate && selected ? (
        <>
          <th scope="row" className="px-6 py-4">
            <input
              type="text"
              defaultValue={product.productName}
              className="border border-gray-300 rounded px-2 py-1"
              onBlur={(e) => {
                setProductUpdated({ ...productUpdated, productName: e.target.value });
                updateProduct(productUpdated);
              }}
            />
          </th>
          <td className="px-6 py-4">
            <input
              type="text"
              defaultValue={product.color}
              className="border border-gray-300 rounded px-2 py-1"
              onBlur={(e) => {
                setProductUpdated({ ...productUpdated, color: e.target.value });
                updateProduct(productUpdated);
              }}
            />
          </td>
          <td className="px-6 py-4">
            <input
              type="text"
              defaultValue={product.category}
              className="border border-gray-300 rounded px-2 py-1"
              onBlur={(e) => {
                setProductUpdated({ ...productUpdated, category: e.target.value });
                updateProduct(productUpdated);
              }}
            />
          </td>
          <td className="px-6 py-4">
            <input
              type="number"
              defaultValue={product.price}
              className="border border-gray-300 rounded px-2 py-1"
              onBlur={(e) => {
                setProductUpdated({ ...productUpdated, price: e.target.value });
                updateProduct(productUpdated);
              }}
            />
          </td>
        </>
      ) : (
        <>
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {product.productName}
          </th>
          <td className="px-6 py-4">{product.color}</td>
          <td className="px-6 py-4">{product.category}</td>
          <td className="px-6 py-4">${product.price}</td>
        </>
      )}
    </tr>
  );
}
