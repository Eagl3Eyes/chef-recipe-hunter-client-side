import React, { createContext, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const {
    id,
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    chefBio,
  } = chef;
  return (
    <>
      <div className="card w-80 mx-auto bg-base-100 shadow-xl">
        <figure>
          <LazyLoad
            className="LazyLoad"
            width={400}
            height={200}
            offset={300}
            threshold={0.75}
          >
            <img className="h-58" src={chefPicture} alt="Chef" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p>
            Experience: <span>{yearsOfExperience}</span>
          </p>
          <p>
            Number of Recipes: <span>{numberOfRecipes}</span>
          </p>

          <div className="card-actions justify-between items-center">
            

            <div className="flex gap-2 justify-center items-center">
              <FaThumbsUp></FaThumbsUp>
              <span>{likes}</span>
            </div>
          </div>
          <br />
          <Link to={`/chefRecipes/${id}`}>
              <button className="btn btn-primary absolute inset-x-0 bottom-0">View Recipes</button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
