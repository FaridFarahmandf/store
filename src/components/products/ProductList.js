import React from 'react'
import { useBlogContext } from '../context/BlogContext'
import Product from './Product';

export default function ProductList() {
    const {blogState} = useBlogContext()
    const productState = blogState.product ;
    return (
        <div className='d-flex flex-wrap'>
            {productState.map((p) => <Product key={p.id} {...p}/>)}
        </div>
    )
}
