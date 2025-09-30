const Navbar = () => {

  return (
    <>
    {window.innerWidth >= 768 ? (
        <div className="bg-green-700 p-4 text-white flex items-center shadow-md mb-4">

        {/* Naaptol text, might replace it with logo later, but it looks good for now */}

            <div className="title text-xl font-bold tracking-wide mr-8">Naaptol</div>

        {/* Navigation Links */}

            <div className="links flex gap-4 text-lg font-semibold mr-8">
                <a href="/" className="hover:text-green-300 transition">Home</a>
                <a href="/about" className="hover:text-green-300 transition">About</a>
            </div>

        {/* Search area and account buttons here */}

            <div className="flex items-center ml-auto">

                <form action="/searc/" method="GET" className="flex gap-2 max-w-md w-full">                                                             
                    <input type="text" placeholder="Search here..." className="px-2 py-1 rounded-md text-gray-900 focus:outline-none w-full" />                                                         
                    <input type="submit" value="Search" className="bg-white text-green-700 px-3 py-1 rounded-md font-semibold hover:bg-green-100 cursor-pointer transition" />
                </form>

                <a href="/login" className="hover:text-green-300 transition ml-8 text-lg font-semibold">User</a>
            
            </div>

        </div>
    ) 
    :
    (
        <div className="bg-green-700 p-4 text-white flex items-center justify-between shadow-md mb-4">
            <div className="title text-4xl font-bold tracking-wide mr-8">Naaptol</div>
            <div className=""></div>
        </div> 
    )
    }
    </>
  )
}

export default Navbar
