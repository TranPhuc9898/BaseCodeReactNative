"use strict";
exports.__esModule = true;
exports.addDetailSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    id: -1
};
var detailSlice = toolkit_1.createSlice({
    name: 'detailSlice',
    initialState: initialState,
    reducers: {
        addDetailSlice: function (state, action) {
            state.id = action.payload;
            console.log(action.payload, 'action.payloadDetail');
        }
    }
});
exports.addDetailSlice = detailSlice.actions.addDetailSlice;
exports["default"] = detailSlice.reducer;
