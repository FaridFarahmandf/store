import React , {useState} from 'react'
// import { useBlogContext } from '../context/BlogContext'
import CheckOutList from './CheckOutList'
import WithLoading from '../HOC/WithLoading'
export default function CheckOutPage() {
    const CheckOutWithLoading = WithLoading(CheckOutList)
    const   [isLoading , setIsLoading] = useState(true)
    setInterval(()=>setIsLoading(false) , 1000);
    
    return (
        <div>
            <CheckOutWithLoading isLoading={isLoading}/>
        </div>
    )
}
