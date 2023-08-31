import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import { AppRoute } from './App'
import './Category.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Loader from './Loader'
import Header from './Header'

export default function Products() {
    useEffect(()=> {
        AOS.init({duration:2000});
      },[]);
    const [Products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:1234/api/getAllProducts`);
                setProducts(response.data.Products);
                setLoader(false);
            } catch (error) {
                console.log(error);
            }
        };


        fetchProducts();
    }, []);
    const { id} = Products;
    return (

    <>
        <div className="container ">
        <div className="text-center" data-aos="fade-up-left">
            <h2 className='categoryheading'>Products</h2>
        </div>
        {loader ? (
            <Loader />
        ) : (                                                                                                                                                                   
            <div className="category" data-aos="fade-up"> 
                {Products.map((val, key) => (
                     <Link className='text-decoration-none'  to={`/product/${val.id}`} key={key}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    <GuestCards
                        key={key}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                        image={val.thumbnail}
                        name={val.title.replace('-', ' ')}
                    />
                  </Link>
                ))}
            </div>
        )}
        
    </div>
          


    </>
)
                }