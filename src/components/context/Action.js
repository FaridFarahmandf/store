import * as actionType from './ActionType'

export const Add_Product_Counter = () => {
    return {
        type: actionType.Add_Product_Counter ,
    }
}

export const Add_Quantity_Counter = (id) => {
    return {
        type: actionType.Add_Quantity_Counter , 
        id
    }
}
export const Dec_Quantity_Counter = (id) => {
    return {
        type: actionType.Dec_Quantity_Counter , 
        id
    }
}
export const Add_To_CheckOut = (id) => {
    return {
        type: actionType.Add_To_CheckOut ,
        id
    }
}
export const Total_Value = () => {
    return {
        type : actionType.Total_Value
    }
}