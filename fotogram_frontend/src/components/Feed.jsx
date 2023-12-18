// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { client } from '../client'
// import MasonryLayout from './MasonryLayout'
// import Spinner from './Spinner'
// import { feedQuery, searchQuery } from '../utils/data'

// const Feed = () => {
//   const [loading, setLoading] = useState(false)
//   const [pins, setPins] = useState(null)
//   const { categoryId } = useParams()
//   useEffect(() => {
//     setLoading(true)
//     if (categoryId) {
//       const query = searchQuery(categoryId)
//       client.fetch(query)
//         .then((data) => {
//           setPins(data)
//           setLoading(false)
//         })

//     } else {
//       client.fetch(feedQuery)
//       .then((data)=>{
//         setPins(data);
//         setLoading(false)
//       })
//     }
//   }, [categoryId])
//   if (loading) return <Spinner message="We are updating your feed!" />
//   return (
//     <div>{pins && <MasonryLayout pins={pins}/>}</div>
//   )
// }
// export default Feed

// Feed.jsx
// Feed.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner message="We are updating your feed!" />;
  
  return (
    <div>
      {pins && pins.length > 0 ? (
        <MasonryLayout pins={pins} />
      ) : (
        <p>No pins found.</p>
      )}
    </div>
  );
};

export default Feed;
