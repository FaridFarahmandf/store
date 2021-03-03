import React from 'react'

export default function Product(props) {
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
                        <button className='btn btn-outline-success'><i class="bi bi-bag-plus"></i></button>
                    </div>
            </div>            
        </div>
    )
}
