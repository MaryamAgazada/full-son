import React from 'react'

import { useState } from 'react'
import { useParams } from 'react-router-dom';
function Detail() {
  const [update,setUpdate] = useState([]);
    const [data, setData] = useState([]);
let{id}=useParams()
  function getAllData(params) {
      fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then((data) => setData(data));
  }
  return (
    <div>
     <div className="card" key={x.id}>
          <p>{x.name}</p>
          <p>{x.id}</p>
          <button onClick={()=>handleDelete(x._id)}>delete</button>
          {/* <button onClick={()=>handleDelete(x._id)}>edit</button> */}
        </div>
    </div>
  )
}

export default Detail
