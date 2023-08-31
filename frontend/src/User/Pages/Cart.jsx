import React, { useContext } from 'react'
import { CartContext } from '../CartContext/context'
import { GlobalContext } from '../../Context/context'
import { decodeToken } from 'react-jwt'
import { Link } from 'react-router-dom';
export default function Cart() {


    const { cart_state, cart_dispatch } = useContext(CartContext)
    const { state, dispatch } = useContext(GlobalContext)
    const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)
    const user = decodeToken(state.token)
    console.log(user)

    const handleRemoveItem = (itemId) => {
        cart_dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
    };
    return (
        <>
        <div className="container">
            <div className="text-center my-5">
                <h2>Cart</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius totam nostrum voluptatibus culpa accusamus.</small>
            </div>

            <div className="p-5 rounded bg-dark">
                {
                    cart_state.cart.map((val, key) => <div className="card mb-3 w-100" key={key}>
                        <div className="row g-0">
                            <div className="col-md-2 d-flex justify-content-center align-items-center">
                                <img src={val.thumbnail} style={{ height: '10vh', objectFit: 'contain' }} className="img-fluid rounded-start" alt={val.productName} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{val.title} - {val.price}'$'</h5>
                                    <p className="card-text">{val.description}
                                    </p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">Quantity : {val.quantity}</small>
                                    </p>
                                </div>
                                <div className="col-md-2">
                                <button className="btn btn-light text-danger border-danger my-2" onClick={() => handleRemoveItem(val.id)}>Remove</button>
                    </div>
                            </div>
                            <div className="col-md-2">
                                <h5 className="card-title text-center pt-5">{val.quantity * val.price}</h5>   
                            </div>
                        
                        </div>
                    </div>)
                }


                <div className="border border-primary border-3 bg-light px-5 py-3 rounded d-flex justify-content-around align-items-center">
                    <h6>Total</h6>
                    <div>{total}</div>
                </div>

                <div className="container mt-3">
                    <button className="d-block w-100 btn btn-light">  <Link to="/checkout" className="text-decoration-none text-dark"> Checkout </Link></button>
                </div>
                

            </div>
        </div >
    
          </>
    )
}
