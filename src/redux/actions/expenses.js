import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses"

export const addExpense = (data)=>{
    return{
        type:ADD_EXPENSE,
        data
    };
};
export const deleteExpense = (data)=>{
    return{
        type:DELETE_EXPENSE,
        data
    };
};
export const searchExpense = (query)=>{
    return{
        type:SEARCH_EXPENSE,
        query
    };
};