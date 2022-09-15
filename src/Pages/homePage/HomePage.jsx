import "./index.css";
import { useLoaderData } from "react-router-dom";
import CategoryList from "../../Components/CategoryList";

function HomePage() {
  const data = useLoaderData();
  console.log("sono in home", data);

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      {/* <h1>Home</h1> */}
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        "Si è verificato un errore!"
      )}
      {/* {console.log(data)} */}
    </div>
  );
}

export default HomePage;
