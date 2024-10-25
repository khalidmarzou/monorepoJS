import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import TR from "./TR";
import { useState } from "react";

export default function ({ products, productsSelected, selectProduct, hideCreateForm, action, store, letsUpdate, updateProduct }) {
  const [product, setProduct] = useState({});

  return (
    <div className="relative overflow-x-auto w-4/5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <TR
                key={product.id}
                product={product}
                selectProduct={selectProduct}
                productsSelected={productsSelected}
                letsUpdate={letsUpdate}
                updateProduct={updateProduct}
              />
            );
          })}
          {hideCreateForm ? (
            <tr>
              <td className="px-6 py-4">
                <input
                  className="bg-gray-100 rounded border border-green-900 outline-none px-2 py-1 w-5/6"
                  type="text"
                  name="productName"
                  onChange={(e) => setProduct({ ...product, productName: e.target.value })}
                />
              </td>
              <td className="px-6 py-4">
                <input
                  className="bg-gray-100 rounded border border-green-900 outline-none px-2 py-1 w-5/6"
                  type="text"
                  name="color"
                  onChange={(e) => setProduct({ ...product, color: e.target.value })}
                />
              </td>
              <td className="px-6 py-4">
                <input
                  className="bg-gray-100 rounded border border-green-900 outline-none px-2 py-1 w-5/6"
                  type="text"
                  name="category"
                  onChange={(e) => setProduct({ ...product, category: e.target.value })}
                />
              </td>
              <td className="px-6 py-4 flex gap-5">
                <input
                  className="bg-gray-100 rounded border border-green-900 outline-none px-2 py-1 w-2/6"
                  type="number"
                  name="price"
                  onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                />
                <div className="flex gap-2">
                  <button
                    className="bg-green-600 text-white py-1 px-2 rounded-sm font-bold hover:bg-green-700"
                    onClick={() => store({ ...product, id: products.length + 1 })}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button className="bg-red-600 text-white py-1 px-2 rounded-sm font-bold hover:bg-red-700" onClick={() => action("Create")}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
