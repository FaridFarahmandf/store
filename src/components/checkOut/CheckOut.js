import React from 'react'
import {useDispatch} from 'react-redux'
// import { useBlogContext } from '../context/BlogContext'
import './checkOut.css'
// import {Add_Quantity_Counter , Dec_Quantity_Counter , Total_Value} from '../context/Action'
import {Add_Quantity_Counter , Dec_Quantity_Counter ,Total_Value ,Delete_Product} from '../redux/Action'
export default function CheckOut(props) {
    // const {dispatch} = useBlogContext()
    const dispatch = useDispatch();
    const increaseQuantity = (id) => {
        dispatch(Add_Quantity_Counter(id))
        dispatch(Total_Value())
    }
    const decreaseQuantity = (id) => {
        dispatch(Dec_Quantity_Counter(id))
        dispatch(Total_Value())
    }
    const deleteItem = (id) => {
        dispatch(Delete_Product(id))
    }
    return (      
            <tr className='rowProduct'>
                <th scope="row">{props.id}</th>
                <td className='img-product'><img src={props.img} alt='product' id='imgProduct'></img></td>
                <td>{props.name}</td>
                <td>{props.brand}</td>
                <td>{props.price} </td>
                <td>
                    <button className='btn btn-ouline-success increase' onClick={() => increaseQuantity(props.id)}>+</button>
                    <i>{props.quantity}</i>
                    <button className='btn btn-ouline-danger decrease' onClick={() => decreaseQuantity(props.id)}>-</button>
                </td>
                <td>{props.subtotal}</td>
                <td><i className="bi bi-trash btn btn-danger" onClick={()=>deleteItem(props.id)}></i></td>
            
            </tr>
            )

    
}
