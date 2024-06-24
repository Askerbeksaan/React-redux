import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: [],
        selectedItem: 0,
        close: null,
        showOrder: null,
        quantity: 1,
        sum: 0
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
            if(state.data[0]==null){
                state.quantity =1
                state.sum = action.payload.price
            }
            else{
                state.quantity =1
                state.sum = action.payload.price
                for(let item of state.data){
                    if(item.name==action.payload.name){
                        state.quantity =item.quantity
                        state.sum = item.sum
                    }
                }
            }
        },
        setShowOrder: (state, action) => {
            state.showOrder = action.payload
        },
        increase: (state, action) => {
            state.quantity = action.payload + 1
            state.selectedItem.quantity = state.quantity
            state.sum = state.selectedItem.quantity * state.selectedItem.price
            state.selectedItem.sum =state.sum
        },
        decrease: (state, action) => {
            if(action.payload<=0){
                action.payload = 1
            }
            state.quantity = action.payload - 1
            state.selectedItem.quantity = state.quantity 
            state.sum = state.selectedItem.quantity * state.selectedItem.price
            state.selectedItem.sum = state.sum
        },
        setData: (state , action) => {
            state.data=state.data.filter(el => el.name!==action.payload.name)
            state.data.push(action.payload);
        },
    },
})
export const { setData, setSelectedItem, increase,decrease,setShowOrder, setClose, quantity } = orderSlice.actions

export default orderSlice.reducer