import React, { useState } from "react";
import CountUp from "react-countup/";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <h1 className="text-center font-bold text-aqua text-3xl">
        Global Solutions,Local
        <br /> Services
      </h1>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div>
          <h1 className="text-black text-center font-bold text-2xl">
            {counterOn ? (
              <CountUp start={0} end={100} duration={2} delay={0} />
            ) : (
              "100"
            )}
          </h1>
          <div className="flex items-center justify-center flex-col py-2">
            <hr className="w-28 bg-black py-[1px]" />
            <h1 className="text-center py-2 text-md font-bold">Custom Apps</h1>
          </div>
        </div>
        <div>
          <h1 className="text-black text-center font-bold text-2xl">
            {counterOn ? (
              <CountUp start={0} end={100} duration={2} delay={0} />
            ) : (
              "100"
            )}
          </h1>
          <div className="flex items-center justify-center flex-col py-2">
            <hr className="w-28 bg-black py-[1px]" />
            <h1 className="text-center py-2 text-md font-bold">
              Dedicated Developers
            </h1>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Count;
