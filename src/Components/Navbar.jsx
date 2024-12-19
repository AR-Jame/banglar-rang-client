import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assest/logo.png';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import profile from '../assest/5907.jpg'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.email)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <div className="flex lg:mx-[15%] font-lota text-lg font-medium flex-wrap justify-between items-center py-4 px-6 bg-white">
            {/* Left side: Website logo */}
            <div className="flex items-center space-x-2">
                <img src={logo} className="w-16 h-16" />
               <Link to='/'>
               <span className="text-xl justify-center font-bodoni">Banglar Rang</span>
               </Link> 
            </div>

            {/* Middle: Links (visible only on larger screens) */}
            <div className="hidden sm:flex gap-6">
                <NavLink to="/" className=" hover:text-[#f49804]">Home</NavLink>
                <NavLink to="/all_paint" className=" hover:text-[#f49804]">All Painting</NavLink>
                <NavLink to="/add_item" className=" hover:text-[#f49804]">add Item</NavLink>
                {/* <NavLink to={`/my_list/${user ? user.email : ''}`} className=" hover:text-[#f49804]">my List</NavLink> */}
                <NavLink to={user ? `/my_list/${user.email}` : '/login'} className=" hover:text-[#f49804]">my List</NavLink>
            </div>

            {/* Right side: Avatar */}
            <div className="flex items-center">

                {
                    user ?
                        <>

                            <label className="relative inline-block z-10">
                                <input type="checkbox" className="hidden peer" />
                                <div

                                    className="rounded-full cursor-pointer transform transition-transform peer-hover:scale-110 peer-checked:scale-95">
                                    <img src={`${user.photoURL ? user.photoURL : profile}`} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-300" />
                                </div>
                                <nav
                                    className="absolute right-0 top-16 bg-gray-200 text-gray-700 p-4 rounded-md shadow-lg scale-75 opacity-0 transition-all transform origin-top-right peer-checked:scale-100 peer-checked:opacity-100"
                                >
                                    <ul className="list-none m-0 p-0 border">
                                        <li className="w-full px-4 py-2">
                                            <p>{user.email? user.email : user.displayName?  user.displayName : ''}</p>
                                        </li>
                                        <li>
                                            <button onClick={handleLogOut} className=" px-4 py-2 w-full text-gray-900 rounded-md hover:bg-[#f49804] hover:text-white transition-colors">
                                                <span>Sign Out</span>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </label>
                        </>
                        :
                        <>
                            <NavLink to="/login" className=" hover:text-[#f49804] "><button>Log In</button></NavLink>
                        </>

                }

            </div>

            {/* Mobile view: Links (shown when on smaller screens) */}
            <div className="w-full sm:hidden mt-4 flex justify-center gap-4">
                <NavLink to="/" className=" hover:text-[#f49804]">Home</NavLink>
                <NavLink to="/all_paint" className=" hover:text-[#f49804]">All Painting</NavLink>
                <NavLink to="/add_item" className=" hover:text-[#f49804]">add Item</NavLink>
                <NavLink to="/my_list" className=" hover:text-[#f49804]">my List</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
