import React from "react";
import Header from "../Components/Header/Header";
import BannerSlider from "../Components/BannerSlider/BannerSlider";
import CounterSection from "../Components/Counter/CounterSection";
import WhyUs from "../Components/About/WhyUs";
import Trainings from "../Components/Trainings/Trainings";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <BannerSlider />
        <CounterSection />
        <WhyUs />
        <Trainings />
      </main>
    </>
  );
};
export default HomePage;
