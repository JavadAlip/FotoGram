// import React from 'react';
// // import { Loader } from 'react-loader-spinner'; // Update this line

// const Spinner = ({ message }) => {
//   return (
//     <div className='flex w-full h-full flex-col justify-center items-center'>
//      <p className="text-lg text-center px-2">{message}</p>
//     </div>
//     // <div className='flex w-full h-full flex-col justify-center items-center'>
//     //   <Loader
//     //     type="Circle"
//     //     color="#00BFFF"
//     //     height={50}
//     //     width={200}
//     //     className="m-5"
//     //   />
      
//     // </div>
//   );
// };

// export default Spinner;



import React from 'react';
import { css } from '@emotion/react'; // Import from @emotion/react
import { RingLoader } from 'react-spinners';

const Spinner = ({ message }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red; // You can change the color if needed
  `;

  return (
    <div className='flex w-full h-full flex-col justify-center items-center'>
      <RingLoader
        css={override}
        size={50}
        color="#000000" // You can change the color if needed
        loading={true}
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
