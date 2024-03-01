'use client'
import { useState, useEffect } from "react";
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

  const saveDataToApi = async () => {
    const invoice = `20242${user.Card.slice(9)}`;
    const date = getCurrentDate();
    const name = user.Name;
    const card = user.Card;
    const khundi = user.Khundi;
    const area = selectedArea;
    const packageType = "Mini"; // You may need to adjust this based on your requirements

    const requestBody = {
      Invoice: invoice,
      Date: date,
      Name: name,
      Card: card,
      Khundi: khundi,
      Area: area,
      Package: packageType,
    };

    try {
      const response = await fetch("localhost:3000/api/purchaser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during API request", error);
    }
  };

  useEffect(() => {
    const foundUser = membersData.find(
      (member) => member.Card === params.number
    );
    setUser(foundUser);
  }, [params.number]);

  useEffect(() => {
    if (user && selectedArea) {
      // Save data to API when both user and selectedArea are available
      saveDataToApi();
    }
  }, [user, selectedArea]);

  return (
    <div className="md:flex md:justify-evenly p-6">
      <div>
        {user ? (
          <div>
            <p>Invoice: {`20242${user.Card.slice(9)}`} </p>
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
