import React , {useEffect} from 'react'
import { useBlogContext } from '../context/BlogContext'
import CheckOutList from './CheckOutList'
export default function CheckOutPage() {
    
    return (
        <div>
            <CheckOutList/>
        </div>
    )
}
