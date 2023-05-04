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
        <div className="card pb-10 card-compact w-full bg-base-100 overflow-hidden shadow-xl">
            <figure>
                <img className="h-72 w-full object-cover" src={thumbnail} alt="recipe" />
            </figure>
            <div className="card ml-5 ">
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
                    <br />
                    <p>
                        <span className="text-xl font-bold ">Cooking Methode: </span>
                        <span className="text-gray-700">{cookingMethod}</span>
                    </p>
                </div>

                <div className="mr-auto flex items-center mt-4 mb-6">
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    ></Rating>
                    {rating}
                </div>
            </div>
            <button
                onClick={handleFavourite}
                disabled={isDisabled}
                className="btn btn-primary absolute inset-x-0 bottom-0"
            >
                Favourite
            </button>
        </div>
    );
};

export default RecipeCard;
