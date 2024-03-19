import { useState, useEffect } from "react";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import Shop from "./components/shop/Shop";
import { toast } from "react-toastify";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCookRecipes, setWantToCookRecipes] = useState([]);
  const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch("recipes.json");
    const data = await response.json();
    setRecipes(data);
  };
  const handleWantToCook = (recipe) => {
    if (!wantToCookRecipes.find((r) => r.recipe_id === recipe.recipe_id)) {
      setWantToCookRecipes([...wantToCookRecipes, recipe]);
    } else {
      toast.error("Recipe already selected!");
    }
  };

  const handlePreparing = (recipe) => {
    setWantToCookRecipes((wantToCookRecipes) =>
      wantToCookRecipes.filter((r) => r.recipe_id !== recipe.recipe_id)
    );
    setCurrentlyCookingRecipes([...currentlyCookingRecipes, recipe]);
  };
  let totalTime = currentlyCookingRecipes.reduce(
    (acc, recipe) => acc + +recipe.preparing_time,
    0
  );
  let totalCalories = currentlyCookingRecipes.reduce(
    (acc, recipe) => acc + +recipe.calories,
    0
  );
  let calculationSummary = {
    totalTime: totalTime,
    totalCalories: totalCalories,
  };
  return (
    <div className="max-md:px-2">
      <Nav />
      <Hero />
      <Shop
        recipes={recipes}
        handleWantToCook={handleWantToCook}
        handlePreparing={handlePreparing}
        wantToCookRecipes={wantToCookRecipes}
        currentlyCookingRecipes={currentlyCookingRecipes}
        calculationSummary={calculationSummary}
      />
    </div>
  );
}

export default App;
