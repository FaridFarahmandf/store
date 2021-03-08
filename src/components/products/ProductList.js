import React , {useState} from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import './productList.css'
export default function ProductList() {
    const productState = useSelector(state => state.product)
    const [searchTerm , setSearchTerm] = useState('')
 
    return (
        <section>
            <div className='d-flex flex-wrap'>
                <div className='search'>
                    
                    <label>Filter by Brand Name : </label><input className='searchIn' type='text' placeholder='Search ...' 
                    onChange={event => setSearchTerm(event.target.value)} />
                </div>
                <div className='d-flex flex-wrap'>
                    {productState.filter(p => {
                        if(searchTerm === '') {
                            return  <Product key={p.id} {...p}/>
                        }else if(p.brand.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return <Product key={p.id} {...p}/>
                        }
                    }).map((p) => <Product key={p.id} {...p}/>)}
                </div>
            </div>
        </section>
    )
}
