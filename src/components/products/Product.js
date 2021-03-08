import React from 'react'
import { useDispatch } from 'react-redux';
// import { useBlogContext } from '../context/BlogContext'
// import { Add_To_CheckOut , 
//     Add_Product_Counter , 
//     Add_Quantity_Counter , 
//     Dec_Quantity_Counter ,
//     Total_Value
//     } from '../context/Action'
import {Add_To_CheckOut , Total_Value , Add_Quantity_Counter ,Dec_Quantity_Counter} from '../redux/Action'
import './product.css'

export default function Product(props) {
    // const {dispatch} = useBlogContext()
    const dispatch = useDispatch()

    const AddToCardHandler = (id) => {
        console.log("AddToCardHandler")
        Add_To_CheckOut(props.id)
        dispatch(Add_To_CheckOut(props.id))
        dispatch(Total_Value())
    }
    
    const increaseQuantity = (id) => {
        dispatch(Add_Quantity_Counter(id))
        dispatch(Total_Value())
    }
    const decreaseQuantity = (id) => {
        dispatch(Dec_Quantity_Counter(id))
        dispatch(Total_Value())
    }


    return (
        <div className='w-25 p-4'>
            <div className='card shadow-sm h-100'>
                    <img src={props.img} className="card-img-top" alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">Name : {props.name} </h5>
                        <p className="card-text">brand : {props.brand}</p>
                        <p className="card-text">price : {props.price}</p>
                    </div>
                    <div className='card-footer d-flex flex-row' id='card-footer'>
                            <i className={`bi bi-bag-plus addCard btn btn-primary ${props.hideBasket}`} onClick={() => AddToCardHandler(props.id)}></i>
                            <div className={`${props.showCounter}`}>
                                <button className='btn btn-success me-3' onClick={() => increaseQuantity(props.id)}>+</button>
                                    {props.quantity}
                                <button className='btn btn-danger ms-3' onClick={() => decreaseQuantity(props.id)}>-</button>
                            </div>
                    </div>
            </div>            
        </div>
    )
}
