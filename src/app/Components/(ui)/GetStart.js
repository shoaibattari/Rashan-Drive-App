// pages/index.js
import Link from "next/link";
import React from "react";

const GetStart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">OMJ RAMZAN RASHAN DRIVE</h1>
      <div className="mb-5">
        <Link href={"/booking"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform motion-reduce:transition-transform-motion">
            Get Started
          </button>
        </Link>
      </div>
      <div>
        <Link href={"booking/delivered"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform motion-reduce:transition-transform-motion">
            Delivered Data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStart;
