import { useState, useEffect ,useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { CartContext } from '../CartContext/context'

function Checkout() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const { cart_state, cart_dispatch } = useContext(CartContext)


    const [checkoutInput, setCheckoutInput] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    });

    const [data, setData] = useState([]);


  const getdata = (e) => {
    const { value, name } = e.target;

    setCheckoutInput(() => {
      return {
        ...checkoutInput,
        [name]: value
      }
    })
  }

    const placeOrder = async (e) => {
        e.preventDefault();
        try {
            const { firstname, lastname, phone, email, address, city, state, zipcode } = checkoutInput;
            if (!firstname || !lastname || !phone || !email || !address || !city || !state || !zipcode) {
                Swal.fire({
                    icon: 'warning',
                title: 'Please fill in all required fields' 
            });
                return;
            }
    
          
            const orderData = {
                items: cart_state.cart,
                totalBill: total,     
                customerContact: phone,
                customerAddress: address,
                customerName: `${firstname} ${lastname}`,
                customerEmail: email,
            };
            console.log(orderData)
            const response = await axios.post('http://localhost:1234/api/create-order', orderData);
            console.log('Response:', response);
            if (response.status === 201) {
                Swal.fire('Success', 'Order Placed Successfully', 'success');
                cart_dispatch({ type: "CLEAR_CART" });
                localStorage.removeItem('cart');
                navigate('/thank-you');
            } else {
                // Handle error response
                Swal.fire('Error', response.data.message, 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'An error occurred while placing the order', 'error');
        }
    };

    const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
  
   
    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Checkout Page</h6>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                        <div className="card">
                                <div className="header m-2">
                                    <h4>Basic Information</h4>

                                </div>

                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                         <label>First Name</label>
                                         <input type="text" onChange={getdata} name="firstname"  className="form-control"/>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                         <label>Last Name</label>
                                         <input type="text"  onChange={getdata} name="lastname" className="form-control"/>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                         <label>Phone No</label>
                                         <input type="text" onChange={getdata}  name="phone" className="form-control"/>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                         <label>Email Address</label>
                                         <input type="text" onChange={getdata} name="email" className="form-control"/>
                                        </div>

                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                         <label>Address</label>
                                         <textarea rows="3" onChange={getdata} name="address" className="form-control" ></textarea>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                         <label>City</label>
                                         <input type="text" onChange={getdata}  name="city" className="form-control"/>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                         <label>State</label>
                                         <input type="text" onChange={getdata} name="state" className="form-control"/>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                         <label>Zip Code</label>
                                         <input type="text" onChange={getdata} name="zipcode" className="form-control"/>
                                        </div>

                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                        <button type="button" className="btn btn-primary"  onClick={placeOrder}>Place Order</button>
                                        </div>

                                    </div>
                                    </div>

                                  </div>
                                </div>
                        </div>
                        <div className="col-md-5">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th width="50%">Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cart_state.cart.map((val, key) => {
                                        
                                        {total};
                                        return (
                                            <tr key={key}>
                                                <td>{val.title}</td>
                                                <td>{val.price}</td>
                                                <td>{val.quantity}</td>
                                                <td>
                                                    {val.quantity * val.price}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colSpan="2" className="text-end fw-bold">
                                            Grand Total
                                        </td>
                                        <td colSpan="2" className="text-end fw-bold">
                                        {total}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
            </div>
        </div> 
    </div> 
</div>
    );
}

export default Checkout;
