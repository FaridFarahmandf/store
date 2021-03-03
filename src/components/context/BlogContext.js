import {useContext , useReducer , createContext} from 'react'
import rootReducer from './Reducer'

const initState = {
    counter : 0 ,
    product : [
        {
            id : 1 , 
            name : "Iphone12 Blue" , 
            price : 699 , 
            img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000'
        },
        {
            id : 2 , 
            name : "Iphone12 Red" , 
            price : 699 ,
            img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343703000'
        },
        {
            id : 3 , 
            name : "Iphone12 Green" , 
            price : 799 ,
            img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000'
        }
    ] ,
    checkOutProduct : [{}]
}
export const BlogContext = createContext() ;

const BlogContextProvider = (props) => {
    const [blogState , dispatch] = useReducer(rootReducer , initState) ;
    return(
        <BlogContext.Provider value={{blogState , dispatch}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => useContext(BlogContext) ;
export default BlogContextProvider ;
