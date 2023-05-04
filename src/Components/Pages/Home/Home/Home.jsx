import React, { Suspense } from "react";
import Header from "../Header/Header";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <OurChef></OurChef>
      <Statistics></Statistics>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
