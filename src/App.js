import React from "react";
import TableComponent from "./components/TableComponent";

function App() {
  return <TableComponent table={table} />;
}

const table = [
  { name: "Ajeya", city: "Mysore" },
  { name: "Varun", city: "Pune" },
  { name: "Aravind", city: "Bengaluru" },
  { name: "Laxmi", city: "Chennai" },
];
export default App;
