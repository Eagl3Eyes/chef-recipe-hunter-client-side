import React, { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";


const OurChef = () => {
  const { chefs } = useLoaderData();


  return (
    <div className="md:mx-80">
      <h2 className="md:text-6xl text-2xl my-40 text-center font-bold">
        Our Professional Chefs
      </h2>

      <div className="md:grid grid-cols-3 gap-16 md:my-20">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default OurChef;
