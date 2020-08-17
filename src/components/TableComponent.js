import React from "react";

export default function TableComponent(props) {
  let a = [];
  for (let row of props.table) {
    // console.log(row);
    a.push(
      <tr key={props.table.indexOf(row)}>
        <td>{row.name}</td>
        <td>{row.city}</td>
      </tr>
    );
  }
  return (
    <div>
      <h2>React-App</h2>
      <table className="table table-hover table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>{a}</tbody>
      </table>
    </div>
  );
}
