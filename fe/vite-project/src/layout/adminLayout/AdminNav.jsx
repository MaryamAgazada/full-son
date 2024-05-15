import React from 'react';
import { Link } from "react-router-dom";
function AdminNav() {
  return (
    <div>
          <nav>
        <ul>
          <li>
            <Link to="/admin/product">product</Link>
          </li>
          <li>
            <Link to="/admin/add">Add</Link>
          </li>
          <li>
            <Link to="/admin/detail">detail</Link>
          </li>
         
        </ul>
      </nav>
    
    </div>
  )
}

export default AdminNav
