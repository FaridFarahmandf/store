import React , {useState }  from 'react'
import ProductList from './ProductList'
import WithLoading from '../HOC/WithLoading'
import Footer from '../footer/Footer'

export default function Products() {
    const ProductsWithLoading = WithLoading(ProductList)
    const [isLoading , setIsLoading] = useState(true)
    setTimeout(()=> setIsLoading(false) , 1000)

    return (
        <div>
            <ProductsWithLoading isLoading={isLoading}/>
            <Footer />
        </div>
    )
}
