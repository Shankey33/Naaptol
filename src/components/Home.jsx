//React imports
import {useState} from 'react'

//External imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

//Local imports
import Banner from './Banner'
import ProductCard from './ProductCard'

const Home = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleOpenFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const products = [
        {
            id: 1,
            name: "Product 1",
            price: "$10",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 2,
            name: "Product 2",
            price: "$20",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 3,
            name: "Product 3",
            price: "$30",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 4,
            name: "Product 4",
            price: "$40",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
                {
            id: 5,
            name: "Product 1",
            price: "$10",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 6,
            name: "Product 2",
            price: "$20",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 7,
            name: "Product 3",
            price: "$30",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 8,
            name: "Product 4",
            price: "$40",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
                {
            id: 9,
            name: "Product 1",
            price: "$10",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 10,
            name: "Product 2",
            price: "$20",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 11,
            name: "Product 3",
            price: "$30",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        },
        {
            id: 12,
            name: "Product 4",
            price: "$40",
            image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg"
        }
    ];

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
            {products.map(product => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
      </div>
    </>
  )
}

export default Home
