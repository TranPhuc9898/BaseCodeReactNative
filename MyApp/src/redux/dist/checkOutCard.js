"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.removeProductToCart = exports.addProductToCart = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    cartGitHubIds: []
};
var checkoutCartSlice = toolkit_1.createSlice({
    name: 'checkOutCart',
    initialState: initialState,
    reducers: {
        addProductToCart: function (state, action) {
            var gitHubId = action.payload;
            console.log(gitHubId, 'gitHubId');
            if (!state.cartGitHubIds.find(function (id) { return id === gitHubId; })) {
                state.cartGitHubIds = __spreadArrays(state.cartGitHubIds, [gitHubId]);
            }
            console.log(state.cartGitHubIds, 'state.cartProductIds1');
        },
        removeProductToCart: function (state, action) {
            var gitHubIdDelete = action.payload;
            console.log(state.cartGitHubIds, ' state.cartGitHubIds'),
                (state.cartGitHubIds = __spreadArrays(state.cartGitHubIds).filter(function (item) {
                    console.log(item !== gitHubIdDelete, 'hello');
                    return item !== gitHubIdDelete;
                }));
        }
    }
});
exports.addProductToCart = (_a = checkoutCartSlice.actions, _a.addProductToCart), exports.removeProductToCart = _a.removeProductToCart;
exports["default"] = checkoutCartSlice.reducer;
