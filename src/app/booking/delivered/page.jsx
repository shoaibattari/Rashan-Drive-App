// OrderPage.js
import React from "react";
import purchases from "../../../../database/purchases.json";

const OrderPage = () => {
  return (
    <div>
      <h2>Delivered data Page</h2>
      <table className=" w-full   ">
        <thead>
          <tr className="">
            <th>Invoice</th>
            <th>Date</th>
            <th>Name</th>
            <th>Card</th>
            <th>Khundi</th>
            <th>Area</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody className="text-center border border-black">
          {purchases.map((purchase, index) => (
            <tr className="border border-black" key={index}>
              <td className="border border-black bg-gray-700 text-gray-200">
                {purchase.Invoice}
              </td>
              <td className="border border-black bg-gray-700 text-gray-200">
                {purchase.Date}
              </td>
              <td className="border border-black bg-gray-700 text-gray-200">
                {purchase.Name}
              </td>
              <td className="border border-black bg-gray-700 text-gray-200">
                {purchase.Card}
              </td>
              <td className="border border-black bg-gray-700 text-gray-200">
                {purchase.Khundi}
              </td>
              <td className="border border-black bg-gray-700 text-gray-200">
                {purchase.Area}
              </td>
              <td className="border border-black bg-gray-700 text-gray-200">
                {purchase.Package}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
