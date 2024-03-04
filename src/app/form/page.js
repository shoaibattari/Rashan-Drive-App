'use client'
import { useState } from 'react';


export default function MyForm() {
  const [formData, setFormData] = useState({
    date: '',
    invoiceNumber: '',
    name: '',
    fname: '',
    cardNumber: '',
    khundi: ''
  });

  const [purchases, setPurchases] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPurchase = { ...formData };
    setPurchases((prevPurchases) => [...prevPurchases, newPurchase]);
    
    // Clear form fields after submission
    setFormData({
      date: '',
      invoiceNumber: '',
      name: '',
      fname: '',
      cardNumber: '',
      khundi: ''
    });

    // You can now do whatever you need with the 'purchases' array.
    console.log(purchases);
  };

  return (
    <form onSubmit={handleSubmit} className='md:grid md:grid-col-6 w-[60%]'>
      <label>Date:</label>
      <input type="text" name="date" value={formData.date} onChange={handleInputChange} />

      <label>Invoice Number:</label>
      <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleInputChange} />

      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

      <label>First Name:</label>
      <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} />

      <label>Card Number:</label>
      <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />

      <label>Khundi:</label>
      <input type="text" name="khundi" value={formData.khundi} onChange={handleInputChange} />


      {/* Other input fields go here */}

      <button type="submit">Submit</button>
    </form>
  );
}
