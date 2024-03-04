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
  const [userNotFound, setUserNotFound] = useState(false);
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
        // User found and has purchases
        setAlreadyPurchased(true);
        setPurchaseData(userPurchases);
        setUserNotFound(false); // Reset userNotFound
      } else {
        // User found but no purchases
        setAlreadyPurchased(false);
        setPurchaseData(null);
        setUserNotFound(false); // Reset userNotFound
        router.push(`booking/${searchInput}`); // Redirect to '/order'
      }
    } else {
      // User not found
      setSearchResult(null);
      setAlreadyPurchased(false);
      setPurchaseData(null);

      const foundInPurchases = purchases.find(
        (purchase) => purchase.Card === searchInput
      );

      if (foundInPurchases) {
        // User found in purchases but not in members
        setAlreadyPurchased(true);
        setUserNotFound(false); // Reset userNotFound
      } else {
        // User not found in both members and purchases
        setUserNotFound(true);
      }
    }
  };

  return (
    <div className="text-3xl bg-gray-500  mt-6 ">
      <label>
        Enter Card Number:
        <input
          type="text"
          value={searchInput}
          className="p-2 border rounded-lg mx-6" 
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {
        userNotFound ? (
          <p>No user found with this card number</p>
        ) : searchResult && searchInput ? (
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
                      <p>Khundi: {purchase.Khundi}</p>
                      <p>Area: {purchase.Area}</p>
                      <p>Package: {purchase.Package}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p> user found But No Purchase Record</p>
            )}
          </div>
        ) : null /* No User Data message is removed when searchInput is empty */
      }
    </div>
  );
};

export default CardSearch;
