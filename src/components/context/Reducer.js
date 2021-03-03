import * as actionType from './ActionType'
const rootReducer = (state , action) => {
    switch(action.type) {
        case  actionType.Add_Product_Counter: 
            console.log('reducer') ;
            return {...state , counter : state.counter + 1}
        default : 
            return state ;
    }
}
export default rootReducer ;