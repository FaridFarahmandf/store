import React from 'react'
import { useBlogContext } from '../context/BlogContext'
import './checkOut.css'
import {Add_Quantity_Counter , Dec_Quantity_Counter , Total_Value} from '../context/Action'

export default function CheckOut(props) {
    const {dispatch} = useBlogContext()
    const increaseQuantity = (id) => {
        dispatch(Total_Value())
        dispatch(Add_Quantity_Counter(id))
    }
    const decreaseQuantity = (id) => {
        dispatch(Total_Value())
        dispatch(Dec_Quantity_Counter(id))
    }
    return (      
            <tr className='rowProduct'>
                <th scope="row">{props.id}</th>
                <td>{props.name}</td>
                <td>{props.brand}</td>
                <td>{props.price} </td>
                <td>
                    <button className='btn btn-ouline-success increase' onClick={() => increaseQuantity(props.id)}>+</button>
                    <i>{props.quantity}</i>
                    <button className='btn btn-ouline-danger decrease' onClick={() => decreaseQuantity(props.id)}>-</button>
                </td>
                <td>{props.subtotal}</td>
            
            </tr>
            )

    
}
