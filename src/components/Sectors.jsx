import React from "react";

const Sectors = () => {
  return (
    <div>
      <div className="flex items-center px-6">
        <h1 className="text-black text-md font-bold">Industry</h1>
        <h1 className="text-[40px] text-aqua">EXPERTS</h1>
      </div>
      <hr className="w-28 mx-6 bg-black py-[1px]" />
      <ul className="px-8 text-black text-lg">
        <li className="py-2">Agriculture</li>
        <li className="py-2">Aviation</li>
        <li className="py-2">E-learning</li>
        <li className="py-2">Finance</li>
        <li className="py-2">HealthCare</li>
        <li className="py-2">Hospitality & Travel</li>
      </ul>
      <hr className="w-28 mx-6 bg-black py-[1px] my-2" />
    </div>
  );
};

export default Sectors;
