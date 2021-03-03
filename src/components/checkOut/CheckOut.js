import React from 'react'

export default function CheckOut(props) {
    return (            
        <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.price}</td>
        </tr>
    )
}
