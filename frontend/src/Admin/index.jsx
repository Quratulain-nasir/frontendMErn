import React from 'react'
// import Home from './pages/Home'
import Category from './pages/Category'
import Brand from './pages/Brands'
import Products from './pages/Products'
import { Route, Routes } from "react-router-dom";
import Customers from "./Pages/Customer";
import Dashboard from "./Pages/Dashbaord";
import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";
import SideMenu from './Components/Sidemenu';
// import { Header } from 'antd/es/layout/layout';
import AppHeader from "./Components/AdminNav";
import AppFooter from "./Components/Footer";

export default function Admin() {
    return (
        <>
         <AppHeader/>
        <div>
        
        <div className="row m-0 p-0">
            
            <div className="col-md-3 m-0 p-0 " style={{ height: '100vh' }}>
                <SideMenu />
            </div>
          
            <div className="col-md-9">
           
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/brands" element={<Brand />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/inventory" element={<Inventory />}></Route>
<Route path="/orders" element={<Orders />}></Route>
<Route path="/customers" element={<Customers />}></Route>

                    <Route path="*" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
      
        </div>
        <AppFooter/>
        </>
    )
}