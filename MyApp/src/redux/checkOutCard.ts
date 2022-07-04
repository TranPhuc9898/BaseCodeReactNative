import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CheckOutCartState {
  cartGitHubIds: string[]
}

const initialState: CheckOutCartState = {
  cartGitHubIds: []
}

const checkoutCartSlice = createSlice({
  name: 'checkOutCart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<string>) => {
      const gitHubId = action.payload
      console.log(gitHubId, 'gitHubId')
      if (!state.cartGitHubIds.find(id => id === gitHubId)) {
        state.cartGitHubIds = [...state.cartGitHubIds, gitHubId]
      }
      console.log(state.cartGitHubIds, 'state.cartProductIds1')
    }
  }
})
export const { addProductToCart } = checkoutCartSlice.actions
export default checkoutCartSlice.reducer
