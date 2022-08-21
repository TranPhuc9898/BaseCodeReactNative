"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SearchBar = function (_a) {
    var placeHolder = _a.placeHolder, value = _a.value, onChangeText = _a.onChangeText, style = _a.style;
    react_1.useEffect(function () { }, []);
    return (react_1["default"].createElement(react_native_1.View, { style: [styles.searchBar, style] },
        react_1["default"].createElement(react_native_1.TextInput, { placeholder: placeHolder, value: value, onChangeText: onChangeText })));
};
exports["default"] = react_1.memo(SearchBar);
//   () {
//   return (
//     <>
//       <EventsListener placeHolder="Search..."  />
//       <View style={{ paddingTop: 50 }}>
//         <Toast topOffset={5} />
//       </View>
//     </>
//   )
// }
var styles = react_native_1.StyleSheet.create({
    searchBar: {
        borderRadius: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        height: 70,
        marginLeft: 10,
        marginRight: 10
        // borderBottomWidth: 2,
    }
});
