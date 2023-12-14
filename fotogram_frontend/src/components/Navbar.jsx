import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
    const navigate = useNavigate();
    if (!user) return null

    return (
        <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
            <div className='flex justify-start focus-within:shadow-sm border-none outline-none items-center w-full px-2 rounded-md bg-white'>
                <IoMdSearch fontSize={21} className="ml-1" />
                <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search'
                    value={searchTerm}
                    onFocus={() => navigate('/search')}
                    className='p-2 w-full bg-white outline-none'
                />
            </div>
            <div className='flex gap-3'>
                <Link to="create-pin" className=" flex justify-center items-center bg-black text-white w-12 h-10 rounded-lg md:w-14 md:h-12">
                    <IoMdAdd />
                </Link>
                <Link to={`user-profile/${user?._id}`} className="hidden md:block">
                    <img src={user.image} alt="user" className='w-14 h-12 rounded-full' />
                </Link>

            </div>
        </div>
    );
};

export default Navbar;


// // Inside Navbar.js or a similar component
// import { Link } from 'react-router-dom';

// const Navbar = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         {/* <li><Link to='/category/1'>Category 1</Link></li>
//         <li><Link to='/create-pin'>Create Pin</Link></li> */}
//         <li><Link to='/search'>Search</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
