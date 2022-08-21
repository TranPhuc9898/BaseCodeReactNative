"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var SideBar2 = function (_a) {
    var navigation = _a.navigation;
    var handleBookListItemPress = react_1.useCallback(function () {
        navigation.closeDrawer();
    }, [navigation]);
    var handelNavigatePress = function () {
        navigation.navigate('FavorScreen');
    };
    var handelNavigatePressMain = function () {
        navigation.navigate('HomeScreen');
    };
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, paddingTop: 80 } },
        react_1["default"].createElement(react_native_1.View, { style: {
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                padding: 30,
                borderBottomWidth: 2
            } },
            react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: handelNavigatePress },
                react_1["default"].createElement(react_native_1.Text, null, "SideBar2"))),
        react_1["default"].createElement(react_native_1.View, { style: {
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                padding: 30,
                borderBottomWidth: 2
            } },
            react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: handelNavigatePressMain },
                react_1["default"].createElement(react_native_1.Text, null, "SideBar3")))));
};
exports["default"] = SideBar2;
var styles = react_native_1.StyleSheet.create({});
