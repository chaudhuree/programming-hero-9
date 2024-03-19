import React from "react";
import Title from "../title/Title";
import { recipesectiondata } from "../../utils";
import Card from "../card/Card";
import FoodBoard from "../foodboard/FoodBoard";

export default function Shop({ recipes,handleWantToCook,handlePreparing,wantToCookRecipes,
  currentlyCookingRecipes,calculationSummary}) {
  
  const { heading, subheading } = recipesectiondata;
  return (
    <div className="container mb-24 mx-auto">
      <Title heading={heading} subheading={subheading} />
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-2 md:gap-4 lg:gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="col-span-12 md:col-span-6">
            <Card  recipe={recipe} handleWantToCook={handleWantToCook}/>
            </div>
            ))}
        </div>
        <aside className="col-span-12 md:col-span-5">
        <FoodBoard 
        handlePreparing={handlePreparing}
        wantToCookRecipes={wantToCookRecipes}
        currentlyCookingRecipes={currentlyCookingRecipes}
        calculationSummary={calculationSummary}
        /></aside>
      </section>
    </div>
  );
}
