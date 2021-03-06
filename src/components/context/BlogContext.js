import {useContext , useReducer , createContext} from 'react'
import rootReducer from './Reducer'

const initState = {
    counter : 0 ,
    product : [
        {
            id : 1 , 
            name : "Iphone12 Blue" , 
            brand : "Apple" ,
            price : 699 , 
            img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000',
            quantity : 0 ,
            subtotal : 0 ,
            
        },
        {
            id : 2 , 
            name : "Iphone12 Red" , 
            brand : "Apple" ,
            price : 699 ,
            img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343703000',
            quantity : 0 ,
            subtotal : 0 ,
        },
        {
            id : 3 , 
            name : "Iphone12 Green" , 
            brand : "Apple" ,
            price : 799 ,
            img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000',
            quantity : 0 ,
            subtotal : 0 ,
        },
        {
            id : 4 , 
            name : "Iphone12 Black" , 
            brand : "Apple" ,
            price : 799 ,
            img : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343702000',
            quantity : 0 ,
            subtotal : 0 ,
        },
        {
            id : 5, 
            name : "s21 PhantoTom Gray" , 
            brand : "Samsung" ,
            price : 700 ,
            img : 'https://image-us.samsung.com/us/smartphones/galaxy-s21/Gallery-images-Palette/O1-Grey/PDP-O1-Grey-lockup-01-1600x1200.jpg?$product-details-jpg$?$product-details-jpg$',
            quantity : 0 ,
            subtotal : 0 ,
        },
        {
            id : 6, 
            name : "s21 Phantom Violet" , 
            brand : "Samsung" ,
            price : 700 ,
            img : 'https://image-us.samsung.com/us/smartphones/galaxy-s21/Gallery-images-Palette/O1-Violet/PDP-O1-Violet-lockup-01-1600x1200.jpg?$product-details-jpg$?$product-details-jpg$',
            quantity : 0 ,
            subtotal : 0 ,
        },
        {
            id : 7, 
            name : "s21 Phantom White" , 
            brand : "Samsung" ,
            price : 800 ,
            img : 'https://image-us.samsung.com/us/smartphones/galaxy-s21/Gallery-images-Palette/O1-White/PDP-O1-White-lockup-01-1600x1200.jpg?$product-details-jpg$?$product-details-jpg$',
            quantity : 0 ,
            subtotal : 0 ,
        },
        {
            id : 8, 
            name : "s21 Phantom Pink" , 
            brand : "Samsung" ,
            price : 800 ,
            img : 'https://image-us.samsung.com/us/smartphones/galaxy-s21/Gallery-images-Palette/O1-Pink/PDP-O1-Pink-lockup-01-1600x1200.jpg?$product-details-jpg$?$product-details-jpg$',
            quantity : 0 ,
            subtotal : 0 ,
        },
    ] ,
    checkOutProduct : [{}] ,
    total : 0 ,
        
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
