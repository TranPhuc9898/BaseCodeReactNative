"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_reanimated_1 = require("react-native-reanimated");
var color_1 = require("@/themes/colors/color");
var Header_1 = require("@/components/Header/Header");
var SideBar_1 = require("@/components/SideBar/SideBar");
var SearchBar_1 = require("@/components/SearchBar/SearchBar");
var debounce_1 = require("lodash/debounce");
var hookListUser_1 = require("@/components/ListUser/hook/hookListUser");
var ListUser_1 = require("@/components/ListUser/ListUser");
var DELAY_DEBOUNCE_IN_MS = 1000;
var handler = function (value, callback) {
    callback(value);
};
var debounceSearchUser = debounce_1["default"](handler, DELAY_DEBOUNCE_IN_MS);
var HomeScreen = function () {
    var _a = hookListUser_1["default"](), setSearch = _a.setSearch, error = _a.error, users = _a.users, loading = _a.loading, search = _a.search;
    var handleOnChangeText = function (value) {
        debounceSearchUser(value, function (newValue) {
            setSearch(newValue.trim());
        });
    };
    ///////////
    var contentRotateY = react_native_reanimated_1.useSharedValue(0);
    var contentTranslateX = react_native_reanimated_1.useSharedValue(0);
    var contentScale = react_native_reanimated_1.useSharedValue(0);
    var _b = react_1.useState(false), openMenu = _b[0], setOpenMenu = _b[1];
    var _c = react_1.useState(false), openOnboardModal = _c[0], setOpenOnboardModal = _c[1];
    var _d = react_1.useState(false), openSignModal = _d[0], setOpenSignModal = _d[1];
    react_1.useEffect(function () {
        // const options = { damping: 5 }
        // contentRotateY.value = withSpring(openMenu ? -30 : 0, options)
        // contentTranslateX.value = withSpring(openMenu ? 30 : 0, options)
    }, [openMenu, openOnboardModal]);
    var animatedContentSyle = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        transform: [
            { translateX: 207 },
            { perspective: 205 },
            { rotateY: contentRotateY.value + "deg" },
            { translateX: -207 },
            { translateX: contentTranslateX.value }
        ]
    }); });
    return (react_1["default"].createElement(react_native_1.View, { style: styles.view },
        react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: [styles.Content, animatedContentSyle] },
            react_1["default"].createElement(react_native_1.ScrollView, { style: { paddingTop: 50 } },
                loading && (react_1["default"].createElement(react_native_1.ActivityIndicator, { color: '#EE82EE', size: "large", style: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    } })),
                react_1["default"].createElement(SearchBar_1["default"]
                // onChangeText chỉ nhận 1 cái text
                , { 
                    // onChangeText chỉ nhận 1 cái text
                    onChangeText: handleOnChangeText, placeHolder: "Search..." }),
                react_1["default"].createElement(ListUser_1["default"], { products: users }))),
        react_1["default"].createElement(SideBar_1["default"], { openMenu: openMenu }),
        react_1["default"].createElement(Header_1["default"], { openMenu: openMenu, setIsOpenMenu: setOpenMenu })));
};
exports["default"] = react_1.memo(HomeScreen);
var styles = react_native_1.StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: color_1["default"].colors.shadow,
        justifyContent: 'center'
    },
    Content: {
        flex: 1,
        backgroundColor: color_1["default"].colors.background,
        borderRadius: 30
    },
    defaultImage: {
        width: '100%',
        height: 200,
        maxHeight: 200,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    }
});
