import * as actionType from './ActionType'

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
const rootReducer = (state = initState , action) => {
    switch(action.type) {
        //increase quantity counter
        case  actionType.Add_Quantity_Counter: 
            const newAddObj = state.checkOutProduct.find(p=> p.id === action.id);
            newAddObj.quantity++;
            console.log(newAddObj.quantity)
            newAddObj.subtotal = newAddObj.quantity * newAddObj.price
            return { ...state , 
                product : [...state.product] ,
                counter:state.counter + 1,
                checkOutProduct: [...state.checkOutProduct]}

        //decrease quantity counter    
        case actionType.Dec_Quantity_Counter:
            const newDecObj = state.checkOutProduct.find(p=> p.id === action.id);
            console.log(newDecObj.quantity)
            if(newDecObj.quantity > 1){
                newDecObj.quantity--;
                newDecObj.subtotal = newDecObj.quantity * newDecObj.price
                return {...state ,
                    product:[...state.product] ,                       
                    counter:state.counter - 1 ,
                    checkOutProduct: [...state.checkOutProduct]}

            }else if(newDecObj.quantity === 1){
                newDecObj.quantity=0;
                newDecObj.subtotal = newDecObj.quantity * newDecObj.price
                return{...state,
                    counter : state.counter- 1 ,
                    checkOutProduct:state.checkOutProduct.filter((p)=> p.id !== action.id)}
            }else
                return {...state}

        //add to checkout
        case actionType.Add_To_CheckOut:
            const checkOutObj = state.product.find((p) => p.id === action.id)
            // console.log(checkOutObj)
            checkOutObj.quantity += 1;
            checkOutObj.subtotal = checkOutObj.quantity * checkOutObj.price
            // let total = 0 ;
            // for(let i = 0 ; i < state.product.length ; i++){
            //     total += state.product[i].subtotal ;
            // }
            // console.log("total : "+total)
            if(checkOutObj === state.checkOutProduct.find((p) => p.id === action.id)){
                return {...state,counter:state.counter + 1,checkOutProduct : [...state.checkOutProduct]}
            }else
                return {...state,
                        product:[...state.product] ,
                        counter:state.counter + 1 ,
                        checkOutProduct : [...state.checkOutProduct , checkOutObj],
                    }

        case actionType.Total_Value : 
        let total = 0 ;
        for(let i = 0 ; i < state.product.length ; i++){
            total += state.product[i].subtotal ;
        }
        console.log("total : "+total)
        return {...state , total:total}
            
        default : 
            return state ;
    }
}
export default rootReducer