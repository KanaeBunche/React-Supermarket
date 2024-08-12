import React from "react";
import "./App.css";

function App() {
  // Data arrays
  const names = ["Apple", "Banana", "Cherry"];
  const prices = ["$1.00", "$0.50", "$2.00"];
  const images = [
    "https://via.placeholder.com/150?text=Apple",
    "https://via.placeholder.com/150?text=Banana",
    "https://via.placeholder.com/150?text=Cherry"
  ];

  // Combine data into a single array of objects
  const items = names.map((name, index) => ({
    name: name,
    price: prices[index],
    image: images[index]
  }));

  return (
    <div className="App">
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
