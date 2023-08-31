import { Avatar,  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from "axios"; 

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:1234/api/all-orders");
        console.log(response.data)
        const ordersArray = response.data.orders;
        const formattedData = ordersArray.map((order) =>
          order.items.map((item) => ({
            key: item._id,
            title: item.title,
            quantity: item.quantity,
            price: item.price,
            totalPrice: item.price * item.quantity,
            thumbnail: item.thumbnail,
          }))
        );
          console.log(formattedData)
        setDataSource(formattedData.flat());
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchOrders();
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
      title: "Product Name",
      dataIndex: "title",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => <span>${value}</span>,
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      render: (value) => <span>${value}</span>,
    },
  
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Orders;
