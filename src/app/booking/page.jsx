// CardSearch.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import members from "../../../database/members.json";
import purchases from "../../../database/purchases.json";

const CardSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [alreadyPurchased, setAlreadyPurchased] = useState(false);
  const [purchaseData, setPurchaseData] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const handleSearch = () => {
    const result = members.find((member) => member.Card === searchInput);

    if (result) {
      setSearchResult(result);

      // Check if the user has made purchases
      const userPurchases = purchases.filter(
        (purchase) => purchase.Card === searchInput
      );

      if (userPurchases.length > 0) {
        setAlreadyPurchased(true);
        setPurchaseData(userPurchases);
      } else {
        setAlreadyPurchased(false);
        setPurchaseData(null);
        router.push("/order"); // Redirect to '/order' when no purchase record
      }
    } else {
      setSearchResult(null);
      setAlreadyPurchased(false);
      setPurchaseData(null);
    }
  };

  return (
    <div>
      <label>
        Enter Card Number:
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {searchResult && searchInput ? (
        <div>
          {alreadyPurchased ? (
            <div>
              <p>Already Purchased</p>
              <h3>Purchase History:</h3>
              <ul>
                {purchaseData.map((purchase, index) => (
                  <li key={index}>
                    <p>Invoice: {purchase.Invoice}</p>
                    <p>Date: {purchase.Date}</p>
                    <p>Name: {purchase.Name}</p>
                    <p>Date: {purchase.Date}</p>
                    <p>Khundi: {purchase.Khundi}</p>
                    <p>Area: {purchase.Area}</p>
                    <p>Package: {purchase.Package}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No Purchase Record</p>
          )}
        </div>
      ) : null /* No User Data message is removed when searchInput is empty */}
    </div>
  );
};

export default CardSearch;
