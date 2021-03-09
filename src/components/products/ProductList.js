import React , {useState} from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import './productList.css'
export default function ProductList() {
    const productState = useSelector(state => state.product)
    const [searchTerm , setSearchTerm] = useState('')
    const [range , setRange] = useState(0)
    
    function rangeValueHandler (e) {
        setRange(e.target.value)
    }
    return (
        <section>
            <div>
                <div className='search d-flex flex-wrap'>
                    
                    <label>Filter by Brand Name : </label><input className='searchIn' type='text' placeholder='Search ...' 
                    onChange={event => setSearchTerm(event.target.value)} />

                <div className="slidecontainer ms-4">
                <input type="range" min="600" max="850" value={range} onChange={rangeValueHandler} className="slider" id="myRange"/>
                <p>Price Range (more than): <span id="demo">{range}</span></p>
                </div>
                </div>
                <div className='d-flex flex-wrap '>
                    {productState.filter(p => {
                        if(searchTerm === '' && range === 0) {
                            return  <Product key={p.id} {...p}/>
                        }else if(p.brand.toLowerCase().includes(searchTerm.toLocaleLowerCase()) && 
                                range < p.price) {
                            return <Product key={p.id} {...p}/>
                        }else if(p.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) &&
                                range < p.price) {
                            return <Product key={p.id} {...p}/>
                        }
                    }).map((p) => <Product key={p.id} {...p}/>)}
                </div>
            </div>
        </section>
    )
}
