import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// const productByIds = {
// 	'2001': {
// 		name: 'Burger',
// 		price: 18,
// 		image: 'burger.jpeg'
// 	},

// }

interface DetailState {
  id: number
}

const initialState: DetailState = {
  id: -1
}

const detailSlice = createSlice({
  name: 'detailSlice',
  initialState: initialState,
  reducers: {
    addDetailSlice: (state, action: PayloadAction<number>) => {
      state.id = action.payload
      console.log(action.payload, 'action.payloadDetail')
    }
  }
})

export const { addDetailSlice } = detailSlice.actions
export default detailSlice.reducer
