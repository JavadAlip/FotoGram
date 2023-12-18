import React from 'react'
import { urlFor } from '../client';


const Pin = ({pin: {postedBy, image, _id,destination}}) => {
  return (
    <div>
        <img  className="rounded-lg w-full " src={urlFor(image).width(250).url()} alt="user-post" />
    </div>
  )
}

export default Pin


// // Pin.jsx
// import React from 'react';

// const Pin = ({ pin }) => {
//   return (
//     <div>
//       {/* Render pin data */}
//       {pin.title}
//     </div>
//   );
// };

// export default Pin;
