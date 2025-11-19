// React Imports
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Local Imports
import { AuthContext } from '../AuthContext.jsx'
import CartProduct from "./CartProduct.jsx"

//External Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus, faTruck, faCreditCard, faShoppingBag, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { cart} = useContext(AuthContext);
  
  useEffect(() => {
    if(Array.isArray(cart)) {
      setCartItems(cart);
    } else {
      setCartItems([]);
    }
  }, [cart]);
  
  // Calculate cart totals
  const subtotal = cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = Math.round(cartItems?.reduce((total, item) => total + (item?.discount/100 * item?.price * item?.quantity), 0));
  const grandTotal = Math.round(cartItems?.reduce((total, item) => total + (item?.price * item?.quantity - (item?.discount/100 * item?.price * item?.quantity)), 0));
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
                    {cartItems.map(item => <CartProduct key={item._id} item={item}/>)}
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
                          <span> `₹ ${shippingFee}` </span>
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
          <div className="bg-white rounded-lg shadow-md p-10 mb-26 text-center">
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
