import * as actionType from './ActionType'

export const Add_Product_Counter = () => {
    return {
        type: actionType.Add_Product_Counter ,
    }
}
export const Add_To_CheckOut = (id) => {
    return {
        type: actionType.Add_To_CheckOut ,
        id
    }
}