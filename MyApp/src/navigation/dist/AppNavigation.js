"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var stack_1 = require("@react-navigation/stack");
var react_1 = require("react");
//
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var native_1 = require("@react-navigation/native");
var components_1 = require("@ui-kitten/components");
var drawer_1 = require("@react-navigation/drawer");
var react_native_appearance_1 = require("react-native-appearance");
var eva = require("@eva-design/eva");
var HomeStackNavigator_1 = require("./HomeStack/HomeStackNavigator");
//import Screen
var HomeScreen_1 = require("../screens/Home/HomeScreen");
var SideBar2_1 = require("../components/SideBar2/SideBar2");
var FavorScreen_1 = require("../screens/FavorScreen/FavorScreen");
var DetailScreen_1 = require("@/screens/DetailScreen/DetailScreen");
var Stack = stack_1.createStackNavigator();
var Drawer = drawer_1.createDrawerNavigator();
function Home() {
    return (react_1["default"].createElement(Drawer.Navigator, { initialRouteName: "HomeScreen", screenOptions: {
            drawerType: 'back',
            swipeEdgeWidth: 200
        }, drawerContent: function (props) { return react_1["default"].createElement(SideBar2_1["default"], __assign({}, props)); } },
        react_1["default"].createElement(Drawer.Screen, { name: "HomeScreen", component: HomeScreen_1["default"], options: {
                headerShown: false
            } }),
        react_1["default"].createElement(Drawer.Screen, { name: "FavorScreen", component: FavorScreen_1["default"], options: {
                headerShown: false
            } }),
        react_1["default"].createElement(Drawer.Screen, { name: "DetailScreen", component: DetailScreen_1["default"], options: {
                headerShown: false
            } })));
}
var AppNavigation = function () {
    return (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaProvider, null,
        react_1["default"].createElement(react_native_appearance_1.AppearanceProvider, null,
            react_1["default"].createElement(components_1.ApplicationProvider, __assign({}, eva, { theme: eva.light }),
                react_1["default"].createElement(native_1.NavigationContainer, null,
                    react_1["default"].createElement(Stack.Navigator, { screenOptions: {
                            headerShown: false
                        } },
                        react_1["default"].createElement(Stack.Screen, { name: "HomeScreen", component: Home, options: {
                                headerShown: false
                            } }),
                        react_1["default"].createElement(Stack.Screen, { name: "DetailScreen", component: DetailScreen_1["default"], options: {
                                headerShown: false
                            } }),
                        react_1["default"].createElement(Stack.Screen, { name: 'HomeStackNavigator', component: HomeStackNavigator_1["default"] })))))));
};
exports["default"] = AppNavigation;
