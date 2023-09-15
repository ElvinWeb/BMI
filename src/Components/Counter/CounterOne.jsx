import { useState } from "react";
import React from "react";
import { CounterItemsData } from "../../Data/CounterItemsData";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const CounterOne = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      {CounterItemsData.map((counter) => (
        <div className="item">
          <div className="image">
            <img src={counter.icon} alt="" />
          </div>
          <div className="name">
            <p>{counter.title}</p>
          </div>
          <ScrollTrigger onEnter={() => setCounterOn(true)}>
            {counterOn && (
              <CountUp
                start={counter.start}
                end={counter.end}
                duration={2}
                delay={0}
                className="counter-span"
              />
            )}
          </ScrollTrigger>
        </div>
      ))}
    </>
  );
};
export default CounterOne;
