//React imports
import { useState } from 'react'

//External imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const FAQ = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen pb-16 pt-6">

      <div className="py-10 mb-8">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-700">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center text-gray-700">
            Find answers to common questions about Naaptol's products and services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        <div className="space-y-4">

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <span className="font-semibold text-lg text-gray-800">Question 1</span>
              <FontAwesomeIcon 
                icon={isOpen1 ? faChevronUp : faChevronDown} 
                className="text-green-700"
              />
            </button>
            
            {isOpen1 && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p>Answer 1</p>
              </div>
            )}
          </div>
          

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <span className="font-semibold text-lg text-gray-800">Question 2</span>
              <FontAwesomeIcon 
                icon={isOpen2 ? faChevronUp : faChevronDown} 
                className="text-green-700"
              />
            </button>
            
            {isOpen2 && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p>Answer 2</p>
              </div>
            )}
          </div>
          

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setIsOpen3(!isOpen3)}
            >
              <span className="font-semibold text-lg text-gray-800">Question 3</span>
              <FontAwesomeIcon 
                icon={isOpen3 ? faChevronUp : faChevronDown} 
                className="text-green-700"
              />
            </button>
            
            {isOpen3 && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p>Answer 3</p>
              </div>
            )}
          </div>
          

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setIsOpen4(!isOpen4)}
            >
              <span className="font-semibold text-lg text-gray-800">Question 4</span>
              <FontAwesomeIcon 
                icon={isOpen4 ? faChevronUp : faChevronDown} 
                className="text-green-700"
              />
            </button>
            
            {isOpen4 && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p>Answer 4</p>
              </div>
            )}
          </div>
          

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setIsOpen5(!isOpen5)}
            >
              <span className="font-semibold text-lg text-gray-800">Question 5</span>
              <FontAwesomeIcon 
                icon={isOpen5 ? faChevronUp : faChevronDown} 
                className="text-green-700"
              />
            </button>
            
            {isOpen5 && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p>Answer 5</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact support section*/}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-4">
            If you couldn't find the answer to your question, our support team is here to help.
          </p>
          <p className="text-gray-700">
            Contact us via email at <a href="mailto:support@naaptol.com" className="text-green-700 hover:text-green-800 font-medium">support@naaptol.com</a>
          </p>
        </div>
      
      </div>
    
    </div>
  )
}

export default FAQ
