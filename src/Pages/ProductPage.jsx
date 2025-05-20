import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/ProductSlice'
import Card from '../components/Card';

function ProductPage() {
    const dispatch = useDispatch();
    const isloading = useSelector(state => state.productReducer.isloading);
    const products = useSelector(state => state.productReducer.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    return (
        <div>{
            isloading ? <div>Loading</div> : <div className="flex flex-wrap justify-center gap-6">
                {products.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>

        }</div>
    )
}

export default ProductPage