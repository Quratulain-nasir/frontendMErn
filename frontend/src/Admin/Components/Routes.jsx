import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../Pages/Customer";
// import Dashboard from "../Pages/Dashbaord";
import Inventory from "../Pages/Inventory";
import Orders from "../Pages/Orders";
import Category from '../pages/Category'
// import Home from "../Pages/Home"
import Products from '../pages/Products'
import Brands from "../pages/Brands";

function AppRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/" element={<Dashboard />}></Route> */}
<Route path="/inventory" element={<Inventory />}></Route>
<Route path="/orders" element={<Orders />}></Route>
<Route path="/customers" element={<Customers />}></Route>
    <Route path="/brands" element={< Brands/>} />
    <Route path="/category" element={<Category />} />
    <Route path="/products" element={<Products />} />
    <Route path="*" element={<Home />} />
</Routes>
  );
}
export default AppRoutes;