import List from "./calorie";
import "./App.css";

function App() {
  const data = [
    { name: "Roll", cal: 46 },
    { name: "Burger", cal: 63 },
    { name: "Coke", cal: 34 },
    { name: "Shawrma", cal: 40 },
    { name: "Fried Rice", cal: 84 },
    { name: "Momos", cal: 97 },
    { name: "Cake", cal: 20 },
  ];
  return (
    <div className="container">
      <div className="calorie-list">
        <h1 className="list">Calorie List</h1>
        <div className="cal-list">
          <List data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
