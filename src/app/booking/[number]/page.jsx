"use client";
import React, { useState, useEffect } from "react";
import membersData from "../../../../database/members.json";
import productsData from "../../../../database/products.json";
export default function Page({ params }) {
  const [user, setUser] = useState(null);
  const [selectedArea, setSelectedArea] = useState("");

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  useEffect(() => {
    const foundUser = membersData.find(
      (member) => member.Card === params.number
    );
    setUser(foundUser);
  }, [params.number]);

  return (
    <div className="md:flex md:justify-evenly p-6">
      <div>
        {user ? (
          <div>
            <p>Invoice: {`20242${user.Card.slice(9)}`}</p>
            <p>Date:{getCurrentDate()}</p>
            <p>Name: {user.Name}</p>
            <p>Card Number: {user.Card}</p>
            <p>Khundi: {user.Khundi}</p>
            <div>
              <label htmlFor="areaDropdown">Area:</label>
              <select
                id="areaDropdown"
                value={selectedArea}
                onChange={handleAreaChange}
              >
                <option value="">Select Area</option>
                <option value="Hussainabad">Hussainabad</option>
                <option value="Memon Society">Memon Society</option>
                <option value="Mosamiyat">Mosamiyat</option>
                <option value="Highway">Highway</option>
              </select>
            </div>
            <p>Package: Mini</p>
          </div>
        ) : (
          <p>-</p>
        )}
      </div>
      <div>
        <ul>
          {productsData.map((product) => (
            <li key={product["S.No"]}>
              {product["S.No"]} - <strong>{product["Item"]}</strong> - Quantity:{" "}
              {product["Qty"]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
