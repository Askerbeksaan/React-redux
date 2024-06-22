import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: [],
        selectedItem: 0,
        close: null,
        showOrder: 0,
        quantity: 0,
        sum: 0,
    },
    reducers: {
        setClose: (state,action) => {
            if(action.payload instanceof Array || action.payload==0){
                state.showOrder = null
            }
            if(action.payload instanceof Object){
                state.selectedItem = null
            }
        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload
            state.quantity =0
        },
        setShowOrder: (state, action) => {
            state.showOrder = action.payload
        },
        increase: (state, action) => {
            state.selectedItem.quantity = action.payload + 1
            state.quantity = state.selectedItem.quantity
            state.price = state.quantity * state.selectedItem.id
            state.selectedItem.price = state.price
        },
        decrease: (state, action) => {
            state.quantity = action.payload - 1
            state.selectedItem.quantity = state.quantity 
            state.selectedItem.price = state.selectedItem.quantity*state.selectedItem.id
            if(state.quantity<=1){
                state.quantity = 1
            }
        },
        setData: (state , action) => {
            state.data=state.data.filter(el => el.title!==action.payload.title)
            state.data.push(action.payload);
        },
    },
})
export const { setData, setSelectedItem, increase,decrease,setShowOrder, setClose, quantity } = orderSlice.actions

export default orderSlice.reducer