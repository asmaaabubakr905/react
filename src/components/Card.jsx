import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'
import { Link } from 'react-router-dom'

function ProductCard({ data }) {
  const dispatch = useDispatch()
  function add() {
    dispatch(addToCart(data));
  }

  return (

    <div className="mx-auto mt-11 w-96 transform overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="h-45 w-full object-cover object-center rounded-t-xl"
        src={data.volumeInfo.imageLinks.thumbnail}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {data.volumeInfo.title}
        </h2>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {data.volumeInfo.description}
        </p>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
          {data.volumeInfo.authors}
        </p>
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-semibold shadow"
            onClick={add}
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${data.id}`}
          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-semibold shadow"
      >
          Book Details
        </Link>
      </div>
    </div>
</div >

    )
}

export default ProductCard


// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../redux/slices/CartSlice'
// import { Link } from 'react-router-dom'
// function Card({data}) {
//  const dispatch=   useDispatch()
//     function save()
//     {
//         dispatch(addToCart(data))
//     }
//   return (
// <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
//   <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
//     <img
//       src={data.volumeInfo.imageLinks.thumbnail	}
//       alt="card-image"
//     />
//   </div>
//   <div className="p-4">
//     <h6 className="mb-2 text-slate-800 text-xl font-semibold">
// {data.volumeInfo.title	}    </h6>
//     <p className="text-slate-600 leading-normal font-light">
//     {data.volumeInfo.authors	}
//     </p>
//   </div>
//   <div className="px-4 pb-4 pt-0 mt-2">
//     <button onClick={save}
//       className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//       type="button"
//     >
//       AddToCart
//     </button>
//     <Link to={`/product/${data.id}`} className="btn btn-primary">book details</Link>
//   </div>
// </div>
//   )
// }

// export default Card