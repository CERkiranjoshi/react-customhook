
import React from "react";
import useHttp from "./useHttp";

function App() {
  const data = useHttp("https://dummyjson.com/products");
  return (
    <div className="App">
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
}

export default App;
