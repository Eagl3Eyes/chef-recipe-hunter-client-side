import React, { useState } from "react";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { id, details, name, rating, ingredients, thumbnail, cookingMethod } =
    recipe;
  const handleFavourite = () => {
    toast.success("Added to favourite!");
    setIsDisabled(true);
  };
  return (
    <>
      <div className="card pb-10 px-4 card-compact w-full bg-base-100 overflow-hidden shadow-xl">
        <figure>
          <img className="h-72 w-full object-cover" src={thumbnail} alt="recipe" />
        </figure>
        <div className="card">
          <h2 className="card-title mt-5 text-2xl">{name}</h2>
          <p>{details}</p>
          
          <div className="">
            <div>
              <h3 className="font-bold text-xl my-4">Ingredients:</h3>
              {ingredients ? (
                <>
                  {ingredients.map((i) => (
                    <p>{i}</p>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
            <p>
              <span className="text-xl font-bold ">Cooking Methode:</span>
              {cookingMethod}
            </p>
          </div>

          <div className="">
          <div className="flex card-actions justify-end gap-5">
            <button
              onClick={handleFavourite}
              disabled={isDisabled}
              className="btn btn-primary"
            >
              Favourite
            </button>
            <div className="mr-auto flex items-center my-auto ">
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              ></Rating>
              {rating}
            </div>
          </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default RecipeCard;
