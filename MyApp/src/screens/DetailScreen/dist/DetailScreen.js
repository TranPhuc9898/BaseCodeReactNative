"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_native_fast_image_1 = require("react-native-fast-image");
var DetailScreen = function () {
    var checkoutCart = react_redux_1.useSelector(function (state) { return state.checkOutCart; });
    var product = react_redux_1.useSelector(function (state) { return state.product; });
    var detail = react_redux_1.useSelector(function (state) { return state.detail; });
    var _a = react_1.useState([]), test = _a[0], setTest = _a[1];
    var dataFavor = product.productByIds;
    react_1.useEffect(function () {
        console.log(dataFavor, 'dataFavor');
        var result = checkoutCart === null || checkoutCart === void 0 ? void 0 : checkoutCart.cartGitHubIds.map(function (item, index) {
            if (dataFavor[item]) {
                return dataFavor[item];
            }
        });
        setTest(result);
        console.log(result, 'resultdataFavor');
    }, []);
    console.log(test, 'testdataFavor');
    return (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, null, test.map(function (item, index) {
        console.log(detail.id, 'vv');
        return (react_1["default"].createElement(react_native_1.View, { key: index }, (detail === null || detail === void 0 ? void 0 : detail.id) == (item === null || item === void 0 ? void 0 : item.id) ? (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_fast_image_1["default"], { source: { uri: item === null || item === void 0 ? void 0 : item.avatar_url }, resizeMode: react_native_fast_image_1["default"].resizeMode.cover, style: { width: '100%', height: 300 } })),
            react_1["default"].createElement(react_native_1.View, { style: { justifyContent: 'center', alignItems: 'center' } },
                react_1["default"].createElement(react_native_1.Text, { style: { textAlign: 'center' } }, item === null || item === void 0 ? void 0 : item.login)))) : null));
    })));
};
exports["default"] = DetailScreen;
var styles = react_native_1.StyleSheet.create({});
