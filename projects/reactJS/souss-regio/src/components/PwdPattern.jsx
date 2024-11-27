import { useState } from "react";

export default function PwdPattern() {
  const [pwd, setPwd] = useState("");

  const numbers_validation = /[1-9]/.test(pwd);
  const uppercase_validation = /[A-Z]/.test(pwd);
  const lowercase_validation = /[a-z]/.test(pwd);
  const specialChar_validation = /[^a-zA-Z0-9\-\/ ]/.test(pwd);
  const length_validation = pwd.length >= 6;

  let validation_qte = 0;
  [numbers_validation, uppercase_validation, lowercase_validation, specialChar_validation, length_validation].forEach((item) =>
    item ? validation_qte++ : validation_qte--
  );

  return (
    <div className="w-1/3 flex flex-col items-start justify-center h-full">
      <div className="flex mb-2 w-full">
        <div className="flex-1">
          <input
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
            placeholder="Enter password"
          />
          <div className="flex gap-1 p-2">
            {validation.map((v, index) =>
              v ? <div key={index} className="flex h-2 w-1/5 bg-green-400"></div> : <div className="flex h-2 w-1/5 bg-gray-200"></div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center px-4">
        <h4 className="py-2 text-lg font-semibold text-gray-800">Your password must contain:</h4>
        <ul className="text-lg text-gray-500 w-full">
          <li className={`flex items-center gap-x-2 ${length_validation ? "text-green-600" : "text-gray-700"}`}>
            X Minimum number of characters is 6.
          </li>
          <li className={`flex items-center gap-x-2 ${lowercase_validation ? "text-green-600" : "text-gray-700"}`}>X Should contain lowercase.</li>
          <li className={`flex items-center gap-x-2 ${uppercase_validation ? "text-green-600" : "text-gray-700"}`}>X Should contain uppercase.</li>
          <li className={`flex items-center gap-x-2 ${numbers_validation ? "text-green-600" : "text-gray-700"}`}>X Should contain numbers.</li>
          <li className={`flex items-center gap-x-2 ${specialChar_validation ? "text-green-600" : "text-gray-700"}`}>
            X Should contain special characters.
          </li>
        </ul>
      </div>
    </div>
  );
}
