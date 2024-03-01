// OrderCreation.js
import React from "react";

const OrderCreation = ({ userData }) => {
  // Function to generate a random invoice number
  const generateRandomInvoice = () => {
   return Math.floor(Math.random() * 1000000);
  };

  // Function to get today's date in the required format
  const getTodayDate = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    return formattedDate;
  };

  // Function to handle order creation
  const handleCreateOrder = () => {
    const newOrder = {
      Invoice: generateRandomInvoice(),
      Date: getTodayDate(),
      Name: userData.Name,
      Card: userData.Card,
      Khundi: userData.Khundi,
      Area: "Hussainabad",
      Package: "Mini",
    };

    // Perform logic to save the new order (e.g., API call, database update)
    console.log("New Order:", newOrder);
    // Additional logic as needed

    // Redirect or perform additional actions as needed
  };

  return (
    <div>
      <h2>Create Order</h2>
      {/* Display user data */}
      <p>Name: {userData.Name}</p>
      <p>Card: {userData.Card}</p>
      <p>Khundi: {userData.Khundi}</p>

      {/* Button to create order */}
      <button onClick={handleCreateOrder}>Create Order</button>
    </div>
  );
};

export default OrderCreation;
