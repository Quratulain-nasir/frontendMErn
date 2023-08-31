import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useState } from "react";
  import React, { useEffect, useContext } from 'react'
import { FaProductHunt } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { TbBrandSuperhuman } from 'react-icons/tb'


// import { GlobalContext } from '../../Context/context'
  import { useLocation, useNavigate } from "react-router-dom";

  
  function SideMenu() {

    const location = useLocation()
    // const { state, dispatch } = useContext(GlobalContext)
    const [selectedKeys, setSelectedKeys] = useState("/");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
<>
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Inventory",
              key: "/inventory",
              icon: <ShopOutlined />,
            },
            {
              label: "Orders",
              key: "/orders",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Customers",
              key: "/customers",
              icon: <UserOutlined />,
            },
            
          {
            label: "Categories",
              key: "/category",
              icon: <BiCategoryAlt />
          },
          {
            label: "Products",
              key:"/products",
              icon: <FaProductHunt />
          },
          {
            label: "Brands",
              key: "/brands",
              icon: <TbBrandSuperhuman />
          },

          ]}
        ></Menu>
      </div>
{/* 


<div className="bg-primary p-3 d-flex text-white justify-content-between align-items-center">
<span>Admin Name</span>
<button className="btn btn-outline-light"
    onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</button>
</div> */}

{/* 
<ul className="nav flex-column pt-3">
{
    NavItems.map((val, key) =>

        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
            <Link className='nav-link d-flex align-items-center  gap-2' to={val.url}>
                <span>{val.icon}</span>

                <span>{val.tab}</span>
            </Link>
        </li>)
}

</ul> */}
</>
    );
  }
  export default SideMenu;