import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

function Prdouct() {
  const [arr, setArr] = useState([])

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=a").then(res => {
      console.log(res.data.items)
      setArr([...res.data.items])
    }
    )
  }, [])
  return (
    <div className='flex flex-wrap'>{
      arr.map((item, index) => <Card key={index} data={item} />)
    }</div>
  )
}

export default Prdouct
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Books() {
//     const [arr, setArr] = useState([]);
//     const [search, setSearch] = useState('');
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         getData();
//     }, []);

//     async function getData() {
//         let res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=a");
//         setArr(res.data.items || []);
//     }

//     let Search = async () => {
//         let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
//         setBooks(res.data.items || []);
//     };


//     return (
//         <div>
//             <input
//                 type="text"
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search for a book..."
//             />
//             <button onClick={Search}>Search</button>

//             <h2>Books</h2>
//             <ul>
//                 {(books.length > 0 ? books : arr).map((book, index) => (
//                     <li key={index}>
//                         <h3>{book.volumeInfo.title}</h3>
//                         <p>{book.volumeInfo.authors?.join(", ")}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Books;