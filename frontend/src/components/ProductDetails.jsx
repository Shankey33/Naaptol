// React Imports
import { useState } from 'react'
import { useParams } from 'react-router-dom';
// External Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTruck, faUndo, faShieldAlt, faStar, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons'

const ProductDetails = () => {
  // State for selected quantity, selected image, and active tab
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('reviews');

  const {id} = useParams();
  console.log(id);

  const product = {
    id: 1,
    name: "Premium Product Name",
    price: "₹1,499",
    originalPrice: "₹2,999",
    discount: "50% OFF",
    rating: 4.5,
    reviewCount: 133,
    images: [
      "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg",
      "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg",
      "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg",
    ],
    description: "This premium product offers exceptional quality and value. Made with high-grade materials for durability and performance. Perfect for everyday use with its versatile design and practical features.",
    specifications: [
      { name: "Material", value: "Premium Quality" },
      { name: "Dimensions", value: "10 x 15 x 5 cm" },
      { name: "Weight", value: "250g" },
      { name: "Warranty", value: "1 Year" }
    ],
    features: [
      "Durable construction",
      "Water-resistant finish",
      "Ergonomic design",
      "Easy to clean",
      "Lightweight and portable"
    ]
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  return (
    <div className="bg-gray-100 py-8 pb-16">
      <div className="container mx-auto px-4">

        <div className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-green-700">Home</a> &gt; <a href="/category" className="hover:text-green-700">Category</a> &gt; <span className="text-gray-700">{product.name}</span>
        </div>

        {/* Product details main section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">

            {/* Product Images */}
            <div className="md:w-1/2 p-4">
              <div className="mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-100 object-contain border rounded-lg"
                />
              </div>
              <div className="flex gap-2 justify-center">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-md p-1 cursor-pointer ${selectedImage === index ? 'border-green-700' : 'border-gray-300'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name}`} className="h-16 w-16 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:border-0 md:border-l-1 border-1 ">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <span className="text-gray-600">{product.reviewCount} reviews</span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-green-700 mr-2">{product.price}</span>
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">{product.discount}</span>
              </div>

              
              <p className="text-gray-600 mb-6">{product.description}</p>


              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Quantity:</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-1 border rounded-l-md bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <div className="quantity-meter  border-gray-500 border-t-1 border-b-1 h-8 pt-0.5">
                    <span className="w-16 text-center py-1 mr-3 ml-3 ">{quantity}</span>
                  </div>
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-1 border rounded-r-md bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>


              <div className="flex flex-col md:flex-row gap-3 mb-6">
                <button className="flex-1 bg-white border-2 border-green-700 text-green-700 py-3 px-6 rounded-md font-semibold hover:bg-green-50 transition flex items-center justify-center">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-green-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-800 transition flex items-center justify-center">
                  Buy Now
                </button>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faTruck} className="text-green-700 mr-2" />
                  <span>Free shipping for orders above ₹299</span>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faUndo} className="text-green-700 mr-2" />
                  <span>7-day easy returns</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-green-700 mr-2" />
                  <span>Secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Specifications and Reviews */}
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b">
            <div className="flex flex-wrap">
              <button 
                className={`py-4 px-6 font-semibold ${
                  activeTab === 'specifications' 
                    ? 'text-green-700 border-b-2 border-green-700' 
                    : 'text-gray-600 hover:text-green-700'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button 
                className={`py-4 px-6 font-semibold ${
                  activeTab === 'reviews' 
                    ? 'text-green-700 border-b-2 border-green-700' 
                    : 'text-gray-600 hover:text-green-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'specifications' && (
              <div>

                {/* Specifications tab here*/}
                <h2 className="text-xl font-bold text-gray-800 mb-4">Product Specifications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex border-b pb-2">
                      <span className="font-semibold text-gray-700 w-1/3">{spec.name}:</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
    
                <h3 className="font-bold text-gray-800 mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reviews tab here */}
            {activeTab === 'reviews' && (
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6 md:border-r md:pt-25">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-semibold"><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> 4.5 out of 5</span>
                    </div>
                    <p className="text-gray-600">Based on {product.reviewCount} reviews</p>
                  </div>
  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-16 text-sm">5 stars</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded mx-2">
                        <div className="h-full bg-green-500 rounded" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">70%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm">4 stars</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded mx-2">
                        <div className="h-full bg-green-500 rounded" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">20%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm">3 stars</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded mx-2">
                        <div className="h-full bg-green-500 rounded" style={{ width: '5%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">5%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm">2 stars</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded mx-2">
                        <div className="h-full bg-green-500 rounded" style={{ width: '3%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">3%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm">1 star</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded mx-2">
                        <div className="h-full bg-green-500 rounded" style={{ width: '2%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">2%</span>
                    </div>
                  </div>
                </div>
  
              
                <div className="md:w-2/3 md:pl-6">
                <span ><FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#000000",}} />Most Recent Reviews</span>

                  <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Rahul M.</h3>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm text-gray-600">Rating: 5/5</span>
                    </div>
                    <p className="text-gray-700 mb-2">Great product! Exactly as described and shipped quickly. The quality exceeded my expectations and the price was very reasonable.</p>
                    <div className="flex gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Verified Purchase</span>
                    </div>
                  </div>
  

                  <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Priya S.</h3>
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm text-gray-600">Rating: 4/5</span>
                    </div>
                    <p className="text-gray-700 mb-2">Good product for the price. Delivery was on time and packaging was secure. Would have given 5 stars but there were minor issues with the finish.</p>
                    <div className="flex gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Verified Purchase</span>
                    </div>
                  </div>
  
                  <div className="pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Amit K.</h3>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm text-gray-600">Rating: 5/5</span>
                    </div>
                    <p className="text-gray-700 mb-2">Extremely satisfied with my purchase! The product is durable and works perfectly. Customer service was also excellent when I had questions.</p>
                    <div className="flex gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Verified Purchase</span>
                    </div>
                  </div>
  
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* to do -> add similar procucts from the product database */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-40 bg-gray-200 mb-3 rounded"></div>
              <h3 className="font-semibold">Similar Product 1</h3>
              <p className="text-green-700">₹1,299</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-40 bg-gray-200 mb-3 rounded"></div>
              <h3 className="font-semibold">Similar Product 2</h3>
              <p className="text-green-700">₹1,199</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-40 bg-gray-200 mb-3 rounded"></div>
              <h3 className="font-semibold">Similar Product 3</h3>
              <p className="text-green-700">₹1,399</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-40 bg-gray-200 mb-3 rounded"></div>
              <h3 className="font-semibold">Similar Product 4</h3>
              <p className="text-green-700">₹1,499</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
