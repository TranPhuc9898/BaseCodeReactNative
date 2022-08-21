import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// const productByIds = {
// 	'2001': {
// 		name: 'Burger',
// 		price: 18,
// 		image: 'burger.jpeg'
// 	},

// }

interface ProductItem {
  avatar_url: string
  login: string
  url: string
  id: number
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
      console.log(products, 'productsRedux')

      state.productByIds = products.reduce(
        (acc: Record<string, ProductItem>, item) => {
          acc[item.id] = {
            url: item.url,
            avatar_url: item.avatar_url,
            id: item.id,
            login: item.login
          }
          console.log(acc, 'acc')
          return acc
        },
        {}
      )
      console.log(state.productByIds, ' state.productById')
    }
  }
})

export const { updateProductByIds } = productSlice.actions
export default productSlice.reducer
