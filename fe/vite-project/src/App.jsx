import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainLayout from "./layout/mainLayout/MainLayout";
import Home from "./pages/MainPages/home/Home";
import AdminLayout from "./layout/adminLayout/AdminLayout";

import Add from "./pages/adminPages/add/Add";
import Detail from "./pages/adminPages/detail/Detail";
import Update from "./pages/adminPages/update/Update";
import Admin from "./pages/MainPages/admin/Admin";
import Product from "./pages/adminPages/product/Product";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
            </Route>
            {/* admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="/admin/product" element={<Product />} />
              <Route path="/admin/add" element={<Add />} />
              <Route path="/admin/detail" element={<Detail />} />
              <Route path="/admin/update/:id" element={<Update />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
