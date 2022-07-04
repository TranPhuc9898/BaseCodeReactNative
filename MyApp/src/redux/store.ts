import { configureStore } from '@reduxjs/toolkit'

// const store = createStore(rootReducer);
import checkoutCartSlice from './checkOutCard'
import productReducer from './productSlice'
const store = configureStore({
  reducer: {
    checkOutCart: checkoutCartSlice,
    product: productReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export default store
