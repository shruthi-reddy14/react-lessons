import "./App2.css";
import Product from "./Product";
export default function App2() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 45 },
  ];
  return (
    <div>
      <h1>This is App2 component</h1>
      <h3>Arrays and objects,applying styles</h3>
      <div className="App-Product-Container">
        {products.map((value) => (
          <Product value={value}  />
        ))}
      </div>
    </div>
  );
}