"use strict";
exports.__esModule = true;
exports.updateProductByIds = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    productByIds: {}
};
var productSlice = toolkit_1.createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        // 1 đống ddataa sẽ trả về update data về trong reducers
        // dispatch
        updateProductByIds: function (state, action) {
            var products = action.payload;
            console.log(products, 'productsRedux');
            state.productByIds = products.reduce(function (acc, item) {
                acc[item.id] = {
                    url: item.url,
                    avatar_url: item.avatar_url,
                    id: item.id,
                    login: item.login
                };
                console.log(acc, 'acc');
                return acc;
            }, {});
            console.log(state.productByIds, ' state.productById');
        }
    }
});
exports.updateProductByIds = productSlice.actions.updateProductByIds;
exports["default"] = productSlice.reducer;
