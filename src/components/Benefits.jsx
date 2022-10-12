import React from "react";

const Benefits = () => {
  return (
    <div>
      <h1 className="text-center text-aqua text-3xl font-bold">
        Software Development <br />
        Done Right
      </h1>
      <div className="md:flex items-center">
        <div className="info px-4 py-2">
          <h1 className="text-aqua font-bold">Real-Time Communication</h1>
          <p className="py-2">
            Our developers work within your nearshore time zone to allow for
            real-time collaboration. We work to achieve a true "branch location"
            feel. We infuse accountability and transparency into our model with
            regular management and progress reports.
          </p>
        </div>
        <div className="info px-4 py-2 ">
          <h1 className="text-aqua font-bold">Scalable Business Model</h1>
          <p className="py-2">
            We work with you to find the areas that are best suited to bring you
            value. Based on your needs, our flexible business model gives you
            the option to increase or decrease the size of your dedicated team
            at any point of the lifecycle.
          </p>
        </div>
        <div className="info px-4 py-2 ">
          <h1 className="text-aqua font-bold">You Own The Source Code</h1>
          <p className="py-2">
            Most software companies insist on owning their own source codes to
            prevent their clients from seeking out other vendors or tools. Under
            our agreement, you are the sole proprietor of the source code and
            intellectual property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
