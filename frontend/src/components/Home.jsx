//React imports
import {useState} from 'react'

//External imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { useEffect } from 'react'
import axios from 'axios'

//Local imports
import Banner from './Banner'
import ProductCard from './ProductCard'


const Home = () => {

    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:3000/product/all");            
        return response.data;
    }



    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(data => setProducts(data)).catch(err => {
            console.error('Failed to fetch products', err);
        });
    }, []);

    const handleOpenFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };



  return (
    <>
      <Banner />
      <div className="products">
        <div className="filter text-white bg-green-700 w-full p-2">
            <div className='flex justify-end items-center relative'>
                <div className='flex items-center text-2xl gap-2 cursor-pointer' onClick={handleOpenFilter}>
                    <FontAwesomeIcon icon={faFilter} style={{color: "#ffffff"}}/>
                    <span className='mr-8'>Filter</span>
                </div>
                { isFilterOpen &&
                    <div className="filter-panel absolute top-full right-0 mt-2 text-xl bg-white text-black p-4 rounded-md shadow-lg w-64 z-20">
                        <div className="flex flex-col space-y-4">
                            <div className="sort-filter">
                                <h3 className="font-semibold mb-2">Sort By</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="radio" name="sort" id="price-asc" className="mr-2" />
                                        <label htmlFor="price-asc" className="flex items-center">
                                            Price <FontAwesomeIcon icon={faAngleUp} className="ml-1" style={{color: "#000000"}} />
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="sort" id="price-desc" className="mr-2" />
                                        <label htmlFor="price-desc" className="flex items-center">
                                            Price <FontAwesomeIcon icon={faAngleDown} className="ml-1" style={{color: "#000000"}} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        
        <div className="product-card grid sm:grid-rows-1 md:grid-cols-4 justify-center items-center mt-10 hide-scrollbar gap-15 mx-10 mb-10 sm:text-2xl">
            {products.map((product) => (
                <ProductCard key={product._id}  product={product} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Home
