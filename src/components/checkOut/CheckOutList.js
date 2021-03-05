import React from 'react'
import { useBlogContext } from '../context/BlogContext'
import CheckOut from './CheckOut'

export default function CheckOutList() {
    const {blogState} = useBlogContext()
    const products = blogState.checkOutProduct ;
    return (
        <section>
            <table className="table table-info  mt-4">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">NAME </th>
                    <th scope="col">Brand </th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">SubTotal</th>
                    </tr>
                </thead>
                <tbody className='w-100'>
                    {products.map((p) => <CheckOut key={p.id} {...p} />)}
                </tbody>
            </table>

            <div className='w-50 mt-4'>
                <div className='card shadow-sm h-75'>
                    <div className='card-body'>
                        <h3 className="card-title">Card Total : <span>{blogState.total}</span></h3>
                        <div>
                            <button className='btn btn-primary'>submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
   
    )
}
