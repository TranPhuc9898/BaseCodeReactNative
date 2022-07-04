import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// const productByIds = {
// 	'2001': {
// 		name: 'Burger',
// 		price: 18,
// 		image: 'burger.jpeg'
// 	},

// }

interface ProductItem {
  login: string
  id: string
}

interface ProductState {
  productByIds: Record<string, ProductItem>
}

const initialState: ProductState = {
  productByIds: {}
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    // 1 đống ddataa sẽ trả về update data về trong reducers
    // dispatch

    updateProductByIds: (state, action: PayloadAction<Array<ProductItem>>) => {
      const products = action.payload
      console.log(products, '............')
      state.productByIds = products.reduce(
        (acc: Record<string, ProductItem>, item) => {
          acc[item.id] = {
            id: item.id,
            login: item.login
          }
          return acc
        },
        {}
      )
    }
  }
})

export const { updateProductByIds } = productSlice.actions
export default productSlice.reducer
