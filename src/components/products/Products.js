import React , {useState , useEffect}  from 'react'
import ProductList from './ProductList'
import WithLoading from '../HOC/WithLoading'

export default function Products() {
    const ProductsWithLoading = WithLoading(ProductList)
    const [isLoading , setIsLoading] = useState(true)
    setTimeout(()=> setIsLoading(false) , 1000)

    return (
        <div>
            <ProductsWithLoading isLoading={isLoading}/>
        </div>
    )
}
