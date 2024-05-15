import React from "react";
import { useState, useEffect } from "react";
function Home() {
  const [data, setData] = useState([]);
  function getAllData() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  function handleDelete(id) {
    fetch('http://localhost:3000/products/' + id, {
  method: 'DELETE',
})
    .then(response => response.json())

  }
  useEffect(() => {
    getAllData();
  });
  return (

    <div>
      {data.map((x) => (
        <div className="card" key={x.id}>
          <p>{x.name}</p>
          <p>{x.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
