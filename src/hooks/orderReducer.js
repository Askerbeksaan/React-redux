import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: [],
        selectedItem: 0,
        close: null,
        showOrder: 0,
    },
    reducers: {
        setClose: (state,action) => {
            if(action.payload[0].title==state.showOrder[0].title){
                state.showOrder=state.close
            }
            if(action.payload.title==state.selectedItem.title){
                state.selectedItem=state.close
            }

        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload
        },
        setShowOrder: (state, action) => {
            state.showOrder = action.payload
        },
        increase: (state, action) => {
            state.selectedItem.id +=1
            state.selectedItem.quantity = action.payload
            state.selectedItem.sum = action.payload*2
        },
        decrease: (state, action) => {
            state.selectedItem.id -=1
            state.selectedItem.quantity = action.payload
            state.selectedItem.sum = action.payload*2
            if(state.selectedItem.id<=0){
                state.selectedItem.id = 0
            }
        },
        setData: (state , action) => {
            state.data=state.data.filter(el => el.title!==action.payload.title)
            state.data.push(action.payload);
        },
    },
})
export const { setData, setSelectedItem, increase,decrease,setShowOrder, setClose } = orderSlice.actions

export default orderSlice.reducer