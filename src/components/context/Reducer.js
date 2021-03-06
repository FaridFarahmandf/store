import * as actionType from './ActionType'
const rootReducer = (state , action) => {
    switch(action.type) {
        //increase quantity counter
        case  actionType.Add_Quantity_Counter: 
            const newQuantityObj = state.checkOutProduct.find((p) => p.id === action.id)
            newQuantityObj.quantity++;
            newQuantityObj.subtotal = newQuantityObj.quantity * newQuantityObj.price ;
            console.log(newQuantityObj.quantity)
            return {...state , counter : state.counter + 1   }

        //decrease quantity counter    
        case actionType.Dec_Quantity_Counter:
            const decreaseObj = state.checkOutProduct.find(p => p.id === action.id)
            if(decreaseObj.quantity > 0) {
                decreaseObj.quantity-- ;
                decreaseObj.subtotal = decreaseObj.quantity * decreaseObj.price ;
                return{...state , counter : state.counter -1 }
            }else if(state.counter === 1){
                decreaseObj.subtotal = decreaseObj.quantity * decreaseObj.price ;
                console.log(decreaseObj.subtotal)
                return{...state , counter : state.counter -1 }
            }else
            return {...state }
            

        //add to checkout
        case actionType.Add_To_CheckOut:
            console.log(`reducer : checkout, id : ${action.id}`)
            const newObj = state.product.find((p) => p.id === action.id)
            newObj.quantity++ ;
            newObj.subtotal = newObj.quantity * newObj.price ;           
            console.log("quantity : "+newObj.quantity) ;
            if(newObj === state.checkOutProduct.find((p1) => p1.id === action.id )){
                return {...state ,  counter : state.counter + 1 }
            }else {
                return {...state,counter : state.counter + 1,checkOutProduct:[...state.checkOutProduct,newObj]}
            }

        case actionType.Total_Value : 
            let total = 0 ;
            for(let i = 0 ; i < state.product.length ; i++){
                total += state.product[i].subtotal ;
            }
            return {...state , total : total}
            
        default : 
            return state ;
    }
}
export default rootReducer ;