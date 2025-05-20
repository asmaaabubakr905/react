import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart ,increaseQuantity,decreaseQuantity} from '../redux/slices/CartSlice'



function Cart({ item }) {
    const cart = useSelector(state => state.cartReducer.cart)
    const dispatch = useDispatch()
    function remove(index) {
        dispatch(removeFromCart({ index }))
    }


    return (
        <div className="flex flex-wrap gap-4 p-4">
            {cart.map((item, index) => (
                <div key={index} className="card" style={{ width: "15rem" }}>
                    <img
                        src={item.volumeInfo.imageLinks.thumbnail}
                        className="card-img-top"
                        alt={item.volumeInfo.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.volumeInfo.title}</h5>
                        <p className="card-text">
                            {item.volumeInfo.authors}
                        </p>
                    </div>
                    <div className="px-4 pb-4 pt-0 mt-2">
                            <p className="text-sm font-semibold mb-2">Quantity: {item.q}</p>
                            <button onClick={() => remove(index)}
                                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                remove
                            </button>
                            
                            <button
                                className="bg-slate-700 text-white px-2 py-1 rounded"
                                onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                            >-</button>

                          

                            <button
                                className="bg-slate-700 text-white px-2 py-1 rounded"
                                onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                            >+</button>
                            </div>
                        </div>
                  
            ))}
                </div>
            )
}

            export default Cart