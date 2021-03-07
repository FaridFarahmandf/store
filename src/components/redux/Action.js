import * as actionType from './ActionType'

export const Add_Quantity_Counter = (id) => {
    return {
        type: actionType.Add_Quantity_Counter , 
        id ,
    }
}
export const Dec_Quantity_Counter = (id) => {
    return {
        type: actionType.Dec_Quantity_Counter , 
        id , 
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
export const Delete_Product = (id) => {
    return {
        type:actionType.Delete_Product , id
    }
}