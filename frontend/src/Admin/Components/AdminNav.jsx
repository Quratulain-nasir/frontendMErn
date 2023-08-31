import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState ,useContext } from "react";
import { getComments, getOrders } from "../API";
import { GlobalContext } from '../../Context/context'
import axios from "axios"; 
import { Navbar } from "react-bootstrap";


function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { state, dispatch } = useContext(GlobalContext)

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:1234/api/all-orders");
        const ordersArray = response.data.orders;
        const productTitles = ordersArray.flatMap(order =>

          order.items.map((item) => ({
            key: item._id,
            title: item.title,
          }))
          );
console.log(productTitles)
        setOrders(productTitles);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);


  console.log(orders)
  return (
   
    <div className="AppHeader">
      <Navbar>
      {/* <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image> */}
      <Typography.Title>Hijaby Wardrobe</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>

      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
  title="Notifications"
  open={notificationsOpen}
  onClose={() => {
    setNotificationsOpen(false);
  }}
  maskClosable
>
<List
  dataSource={orders}
  renderItem={(item) => {
    return <List.Item>{item.title} has been ordered!</List.Item>;
  }}
  />
</Drawer>

        <div className=" p-3 d-flex text-white justify-content-right align-items-right">
        <button className="btn btn-outline-dark text-dark" onClick={() => dispatch({ type: "USER_LOGOUT" })}> 
       Logout
      </button>
      </div>
     
    </Navbar></div>
  );
}

export default AppHeader;