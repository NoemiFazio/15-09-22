import "./index.css";
import { Fragment } from "react";
import { useOutletContext } from "react-router-dom";
import Recipe from "../../Pages/recipe";

const RecipeInstructions = () => {
  const instruction = useOutletContext();

  return (
    <div>
      <p> {instruction.strInstructions}</p>
    </div>
  );
};

export default RecipeInstructions;
