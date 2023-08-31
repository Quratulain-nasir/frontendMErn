import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios'

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:1234/api/getAllProducts");
        setProducts(response.data.Products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchProducts();
  }, []);

  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (link) => {
        return <Avatar src={link} />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => <span>${value}</span>,
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={products}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Inventory;
