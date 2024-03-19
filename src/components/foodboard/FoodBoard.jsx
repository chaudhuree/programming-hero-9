import React from "react";
import Table from "../table/Table";
import Title from "./Title";
import TotalCalculation from "../totalcalculation/TotalCalculation";

export default function FoodBoard({
  handlePreparing,
  wantToCookRecipes,
  currentlyCookingRecipes,
  calculationSummary
}) {
  let wantToCookRecipesTitle = "Want to Cook: " + wantToCookRecipes.length;
  let currentlyCookingRecipesTitle =
    "Currently cooking: " + currentlyCookingRecipes.length;
  return (
    <div className="border rounded-2xl lg:h-full">
      <Title title={wantToCookRecipesTitle} />
      <Table data={wantToCookRecipes} handlePreparing={handlePreparing} />
      <Title title={currentlyCookingRecipesTitle} />
      <Table data={currentlyCookingRecipes} />
      <div className="my-4 mx-5 pb-20 md:pb-24 flex justify-end">
        <TotalCalculation calculationSummary={calculationSummary}/>
      </div>
    </div>
  );
}
