import React  from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';

export default function ProductList() {
    const productState = useSelector(state => state.product)
    return (
        <section>
            <div className='d-flex flex-wrap'>
                {productState.map((p) => <Product key={p.id} {...p}/>)}
            </div>
        </section>
    )
}
