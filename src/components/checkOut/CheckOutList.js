import React from 'react'
import { useBlogContext } from '../context/BlogContext'
import CheckOut from './CheckOut'

export default function CheckOutList() {
    const {blogState} = useBlogContext()
    const products = blogState.checkOutProduct ;
    return (
            <table className="table table-info table-hover mt-4">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">NAME :</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className='w-100'>
                    {products.map((p) => <CheckOut key={p.id} {...p} />)}
                </tbody>
            </table>
   
    )
}
