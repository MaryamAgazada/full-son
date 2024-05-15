import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Product() {
    const [data,setData]=useState([])

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
      },[]);

  return (
 
    <div>
        {
            data.map((x)=>
            <div className="card">
                <p>{x.name}</p>
                <p>{x.age}</p>
                <button onClick={()=>handleDelete(x._id)}>delete</button>
                <button ><Link to={`/admin/update/${x._id}`}>Edit</Link></button>
            </div>
            )
        }
     
    </div>
  )
}

export default Product
