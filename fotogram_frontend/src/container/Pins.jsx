// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Search from '../components/Search.jsx';
// import Navbar from '../components/Navbar.jsx';
// import Feed from '../components/Feed.jsx';
// import CreatePin from '../components/CreatePin.jsx';
// import PinDetail from '../components/PinDetail.jsx';
// const Pins = ({ user }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div className='px-2 md:px-5'>
//       <div className='bg-gray-50'>
//         <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  user={user}/>
//         </div>
//         <div className='h-full'>
//           <Routes>
//             <Route path='/' element={< Feed />} />
//             <Route path='/category/:categoryId' element={< Feed />} />
//             <Route path='/pin-detail/:pinId' element={<PinDetail user={user} />} /> 
//             <Route path='/create-pin' element={<CreatePin user={user} />} />
//             <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
//           </Routes>
//         </div>
//     </div>
//   );
// }

// export default Pins;


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from '../components/Search.jsx';
import Navbar from '../components/Navbar.jsx';
import Feed from '../components/Feed.jsx';
import CreatePin from '../components/CreatePin.jsx';
import PinDetail from '../components/PinDetail.jsx';

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user} />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed />} />
          {/* <Route index element={<Feed />} /> */}
          <Route path='/category/:categoryId' element={<Feed />} />
          <Route path='/pin-detail/:pinId' element={<PinDetail user={user} />} />
          <Route path='/create-pin' element={<CreatePin user={user} />} />
          <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;

