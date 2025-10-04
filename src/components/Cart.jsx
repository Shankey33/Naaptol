// React Imports
import { useState } from 'react'

//External Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus, faTruck, faCreditCard, faShoppingBag, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  // Sample cart data - replace with your actual data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Product Name",
      price: 1499,
      originalPrice: 2999,
      quantity: 2,
      image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg",
    },
    {
      id: 2,
      name: "Another Quality Product",
      price: 999,
      originalPrice: 1499,
      quantity: 1,
      image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg",
    },
    {
      id: 3,
      name: "Budget Friendly Item",
      price: 499,
      originalPrice: 799,
      quantity: 3,
      image: "https://sampling.com/image/cache/data/Sample_Containers/Sample_Containers2-300x300.jpg",
    }
  ]);

  // Handle quantity changes
  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.originalPrice * item.quantity), 0);
  const discount = cartItems.reduce((total, item) => total + ((item.originalPrice - item.price) * item.quantity), 0);
  const grandTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingFee = subtotal >= 299 ? 0 : 49;
  const total = grandTotal + shippingFee;

  return (
    <div className="bg-gray-100 py-8 pb-16">
      <div className="container mx-auto px-4">
        
        <div className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-green-700">Home</a> &gt; <span className="text-gray-700">Shopping Cart</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Items ({cartItems.length})</h2>
                  
                  {/* Cart items list */}
                  <div className="divide-y">
                    {cartItems.map(item => (
                      <div key={item.id} className="py-6 flex flex-col sm:flex-row">
                        {/* Product image */}
                        <div className="sm:w-32 mb-4 sm:mb-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-32 object-contain rounded border"
                          />
                        </div>
                        
                        {/* Product details */}
                        <div className="flex-1 sm:ml-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                            <div className="mb-2">
                              <span className="font-bold text-green-700 mr-2">₹ {(item.price) * item.quantity} </span>
                              <span className="text-sm text-gray-500 line-through">₹ {(item.originalPrice) * item.quantity}</span>
                              <span className="ml-2 bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">
                                {Math.round((item.originalPrice - item.price) / item.originalPrice * 100)}% OFF
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-2 sm:mt-0">
                            {/* Quantity control */}
                            <div className="flex items-center">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 border rounded-l bg-gray-100 hover:bg-gray-200"
                                disabled={item.quantity <= 1}
                              >
                                <FontAwesomeIcon icon={faMinus} className="text-gray-600" />
                              </button>
                              <span className="w-10 text-center border-t border-b py-1">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 border rounded-r bg-gray-100 hover:bg-gray-200"
                              >
                                <FontAwesomeIcon icon={faPlus} className="text-gray-600" />
                              </button>
                            </div>
                            
                            {/* Remove button */}
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-800 flex items-center"
                            >
                              <FontAwesomeIcon icon={faTrash} className="mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Continue Shopping */}
              <div className="flex items-center mb-6">
                <a href="/" className="text-green-700 hover:text-green-900 flex items-center">
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Continue Shopping
                </a>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-20">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                      <span className="text-gray-800 font-medium">₹ {(subtotal)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-green-600 font-medium">₹ {(discount)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping Fee</span>
                      <span className="text-gray-800 font-medium">
                        {shippingFee === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          "₹ "(shippingFee)
                        )}
                      </span>
                    </div>
                    
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span className="text-gray-800">Total</span>
                        <span className="text-green-700">₹ {(total)}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        (Including all taxes)
                      </div>
                    </div>
                  </div>
                  
                  {/* Checkout button */}
                  <button className="w-full bg-green-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-800 transition flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                    Proceed to Checkout
                  </button>
                  
                  {/* Shipping info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon icon={faTruck} className="text-green-700 mr-2" />
                      <span className="text-sm text-gray-600">Free shipping for orders above ₹299</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faShoppingBag} className="text-green-700 mr-2" />
                      <span className="text-sm text-gray-600">7-day easy returns on all items</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty cart view
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <div className="text-6xl text-gray-300 mb-6">
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-6">Add something to the card to place order!</p>
            <a href="/" className="inline-block bg-green-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-800 transition">
              Continue Shopping
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
