import * as actionType from './ActionType'
const rootReducer = (state , action) => {
    switch(action.type) {
        case  actionType.Add_Product_Counter: 
            console.log('reducer : Add counter') ;
            return {...state , counter : state.counter + 1} ;
        case actionType.Add_To_CheckOut:
            console.log(`reducer : checkout ${action.id}`)
            const newObj = state.product.find((p) => p.id === action.id)
            if(newObj === state.checkOutProduct.find((p1) => p1.id === action.id )){
                return {...state}
            }else
            return {...state , checkOutProduct : [...state.checkOutProduct,newObj] }
        default : 
            return state ;
    }
}
export default rootReducer ;