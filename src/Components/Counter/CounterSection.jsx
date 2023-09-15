import React from "react";
import CounterOne from "./CounterOne";

export const CounterSection = () => {
  return (
    <section className="counter-section">
      <div className="container">
        <div className="counter-section-inner">
          <CounterOne />
        </div>
      </div>
    </section>
  );
};
export default CounterSection;
