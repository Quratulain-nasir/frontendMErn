import React, { useEffect, useState } from 'react'
import BrandModal from '../components/BrandModal'
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Brands() {

    const [Brands, setBrands] = useState([])
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     axios.get('http://localhost:1234/api/getallbrands')
    //         .then((json) => setbrands(json.data.brands))
    //         console.log(brand)
    //         .catch((err) => console.log(err))

    // }, [])
    useEffect(() => {
        setLoading(true);
        const fetchBrands = async () => {
            try {
                const response = await axios.get(`http://localhost:1234/api/getAllbrands`);
                setBrands(response.data.Brands);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
  
  
        fetchBrands();
    }, []);

    const deleteProduct = (BrandName) => { console.log(BrandName) }



    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Brands</span>
                <BrandModal recallData={setBrands} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Brand Name</th>
                            <th scope="col">Brand Image</th>
                            <th scope="col">Actions</th>


                        </tr>
                    </thead>
                    <tbody  loading={loading}>
                        {
                            Brands?.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.BrandName}</td>
                                    <td><img src={val.BrandImage} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>
                                        <button className="btn btn-dark mx-1"><BsFillPencilFill /></button>
                                        <button className="btn btn-dark mx-1" onClick={() => deleteProduct(val.BrandName)}><AiFillDelete /></button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}
