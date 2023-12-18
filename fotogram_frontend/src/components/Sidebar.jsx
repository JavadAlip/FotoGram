// import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import { RiHomeFill } from 'react-icons/ri'
// import { IoIosArrowForward } from 'react-icons/io';

// import logo from '../assets/fotogram.png'
// const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 transition-all capitalize ease-in-out  duration-200 hover:text-black'
// const isActiveStyle = 'flex items-center px-5 border-black gap-3 font-extrabold border-r-2 transition-all capitalize ease-in-out  duration-200 '
// const categories = [
//   { name: 'Animals' },
//   { name: 'Movies' },
//   { name: 'Photography' },
//   { name: 'Gaming' },
//   { name: 'Other' },

// ]

// const Sidebar = ({ user, closeToggle }) => {
//   const handleCloseSidebar = () => {
//     if (closeToggle) closeToggle(false)
//   }
//   return (
//     <div className='flex flex-col justify-between bg-white h-full overflo-y-scroll min-w-210 hide-scrollbar'>
//       <div className='flex flex-col'>
//         <Link 
//         to="/"
//         className='flex px-5 my-6 pt-1 w-190 items-center gap-2'
//           onClick={handleCloseSidebar}
//         >
//           <img src={logo} alt="logo" className='w-full' />
//         </Link>
//         <div className='flex flex-col gap-5'>
//           <NavLink
//             to="/"
//             className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
//             onClick={handleCloseSidebar}
//           >
//             <RiHomeFill />
//             Home
//           </NavLink>
//           <h3 className='mt-2 px-5 2xl:text-xl '>CATEGORIES</h3>
//           {categories.slice(0, categories.length - 1).map((category) => (
//             <NavLink
//               to={`/category/${category.name}`}
//               className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
//               onClick={handleCloseSidebar}
//               key={category.name}
//             >
//               {category.name}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//       {user && (
//         <Link
//           to={`user-profile/${user._id}`}
//           className='flex my- mb-5 gap-2 p-2 items-center mx-3 rounded-lg shadow-lg bg-white'
//           onClick={handleCloseSidebar}
//         >
//           <img src={user.image} className='w-8 h-8 rounded-full' alt="user-profile" />
//           <p>{user.userName}</p>
//         </Link>
//       )}
//     </div>
//   )
// }
// export default Sidebar



import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import logo from '../assets/fotogram.png';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 transition-all capitalize ease-in-out duration-200 hover:text-black';
const isActiveStyle = 'flex items-center px-5 border-black gap-3 font-extrabold border-r-2 transition-all capitalize ease-in-out duration-200 ';
const categories = [
  { name: 'Animals' },
  { name: 'Movies' },
  { name: 'Photography' },
  { name: 'Gaming' },
  { name: 'Other' },
];

const Sidebar = ({ user, closeToggle, currentCategory }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link
          to="/"
          className='flex px-5 my-6 pt-1 w-190 items-center gap-2'
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className='w-full' />
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className='mt-2 px-5 2xl:text-xl '>CATEGORIES</h3>
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className='flex my- mb-5 gap-2 p-2 items-center mx-3 rounded-lg shadow-lg bg-white'
          onClick={handleCloseSidebar}
        >
          <img src={user.image} className='w-8 h-8 rounded-full' alt="user-profile" />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
