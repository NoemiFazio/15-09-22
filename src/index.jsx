import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./Pages/homePage";
import ErrorPage from "./Pages/errorPage";
import Category from "./Pages/category";
import Recipe from "./Pages/recipe";
import RecipeYouTube from "./Components/RecipeYouTube/RecipeYouTube.jsx";
import RecipeIngredients from "./Components/RecipeIngredients/RecipeIngredients.jsx";
import RecipeInstructions from "./Components/RecipeInstructions/RecipeInstructions.jsx";
import { ENDPOINTS } from "./utils/api/endpoints.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async ({ params }) => {
          return fetch(ENDPOINTS.CATEGORIES);
        },
      },
      {
        path: "/catalogo",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/catalogo/:categoryName",
        children: [
          {
            path: "",
            element: <Category />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.FILTER}?c=${params?.categoryName}`);
            },
          },
          {
            path: ":recipeName/:id",
            element: <Recipe />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.DETAIL}?i=${params?.id}`);
            },
            children: [
              { path: "", element: <Navigate to={"istruzioni"} /> },
              { path: "ingredienti", element: <RecipeIngredients /> },
              { path: "istruzioni", element: <RecipeInstructions /> },
              { path: "youtube", element: <RecipeYouTube /> },
            ],
          },
        ],
      },
      // { path: "/test", element: <TestPage /> },
      { path: "*", element: <ErrorPage status={404} /> },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
