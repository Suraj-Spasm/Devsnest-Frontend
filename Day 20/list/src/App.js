import "./App.css";
import { useState } from "react";
import List from "./list";
import { data } from "./data";

function App() {
  console.log(data);
  const [items, setItems] = useState(data);

  const deleteItem = (id) => {
    setItems(items.filter((item, idx) => id !== idx));
  };

  return (
    <div className="container">
      <h1 className="list">Calorie List</h1>
      <div className="calorie-list">
        {items.length ? (
          items.map((item, idx) => (
            <List key={idx} id={idx} item={item} deleteItem={deleteItem} />
          ))
        ) : (
          <h2 className="empty">List is empty</h2>
        )}
      </div>
    </div>
  );
}

export default App;
