import React from 'react'
import { useBlogContext } from '../context/BlogContext'
import {Add_Product_Counter, Add_To_CheckOut} from '../context/Action'

export default function Product(props) {
    const {dispatch , blogState} = useBlogContext()
    const AddToCardHandler = (id) => {
        console.log("counterHandler")
        dispatch(Add_Product_Counter())
        dispatch(Add_To_CheckOut(id))
    }
    return (
        <div className='w-25 p-4'>
            <div className='card shadow-sm h-100'>
                    <img src={props.img} className="card-img-top" alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.id}</p>
                        <p className="card-text">{props.price}</p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-outline-success' onClick={() => AddToCardHandler(props.id)}>
                            <i className="bi bi-bag-plus"></i>
                        </button>
                    </div>
            </div>            
        </div>
    )
}
