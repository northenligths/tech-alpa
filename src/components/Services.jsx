import React from "react";
import desktop from "../components/images/desktop.svg";
import developers from "../components/images/dev.svg";
import product from "../components/images/product.svg";

const Services = () => {
  return (
    <div>
      <h1 className="text-center text-aqua font-bold text-2xl py-2">
        Industry-Experienced
        <br />
        Developers,On Demand
      </h1>
      <div className="services md:flex items-center">
        <div className="card text-center px-4">
          <div className="flex items-center justify-center">
            <img src={desktop} alt="DesktopImage" />
          </div>
          <h1 className="text-center text-md font-bold py-2 ">
            App Development
          </h1>
          <p className="py-2">
            Our team of software developers can build exceptional applications
            across a breadth of devices including desktop, mobile and tablet.
            With the help of our industry expertise, we are able to give the end
            user the best application experience across multiple channels.
          </p>
        </div>
        <div className="card text-center px-4 py-4">
          <div className="flex items-center justify-center">
            <img src={developers} alt="DesktopImage" />
          </div>
          <h1 className="text-center text-md font-bold py-2 ">
            On-Demand Developers
          </h1>
          <p className="py-2">
            We are proud to employ over 2,800 in-house developers with a variety
            of software development experience in an array of industries. This
            enables us to be a one-stop shop, removing the hassles of managing
            multiple vendors, logistics, and technological bottlenecks.
          </p>
        </div>
        <div className="hidden md:inline border-l-4 border-aqua h[500px]"></div>
        <div className="card text-center px-4 py-4">
          <div className="flex items-center justify-center">
            <img src={product} alt="DesktopImage" />
          </div>
          <h1 className="text-center text-md font-bold py-2 ">
            Product Support
          </h1>
          <p className="py-2">
            We are proud to employ over 2,800 in-house developers with a variety
            of software development experience in an array of industries. This
            enables us to be a one-stop shop, removing the hassles of managing
            multiple vendors, logistics, and technological bottlenecks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
