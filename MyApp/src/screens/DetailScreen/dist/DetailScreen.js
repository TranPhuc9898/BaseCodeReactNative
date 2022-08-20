"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var DetailScreen = function () {
    var _a;
    var checkoutCart = react_redux_1.useSelector(function (state) { return state.checkOutCart; });
    var product = react_redux_1.useSelector(function (state) { return state.product; });
    var _b = react_1.useState([]), test = _b[0], setTest = _b[1];
    var dataFavor = product.productByIds;
    react_1.useEffect(function () {
        console.log(dataFavor, 'dataFavor');
        // const result = checkoutCart?.cartGitHubIds.map((item, index) => {
        //   if (dataFavor[item]) {
        //     return dataFavor[item]
        //   }
        // })
        // setTest(result)
        // console.log(result, 'resultdataFavor')
    }, []);
    //   console.log(test, 'testdataFavor')
    return (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, null,
        react_1["default"].createElement(react_native_1.Text, null, (_a = dataFavor[0]) === null || _a === void 0 ? void 0 : _a.login)));
};
exports["default"] = DetailScreen;
var styles = react_native_1.StyleSheet.create({});
