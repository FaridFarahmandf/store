import React from 'react'
import './slider.css'

export default function Slider() {
    return (
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://mizoma.com/uploads/image/rootimage/128/fbbe76dd10b24a705af202a4db69727f.jpg?w=1400&h=1000" className="d-block w-100" alt=''/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/598dc23acd0f6843f2c3b90a/1510233500648-BKLTOD9913APAMNJ7N0S/ke17ZwdGBToddI8pDm48kEhuokvAtH7Vxc1HYRZVIFUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dlZ4d8DH2W54YL3Tam6vEU9lI0sVqHP6th0qgtvWFP40JvwGh1qtNWvMhYKnvaKhbA/Office+Desk+Header.jpg?format=2500w" className='d-block w-100' alt=""/>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
    )
}
