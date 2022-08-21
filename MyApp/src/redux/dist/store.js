"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
// const store = createStore(rootReducer);
var checkOutCard_1 = require("./checkOutCard");
var productSlice_1 = require("./productSlice");
var DetailSlice_1 = require("./DetailSlice");
var store = toolkit_1.configureStore({
    reducer: {
        checkOutCart: checkOutCard_1["default"],
        product: productSlice_1["default"],
        detail: DetailSlice_1["default"]
    }
});
exports["default"] = store;
