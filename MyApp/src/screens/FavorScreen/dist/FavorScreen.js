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
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fast_image_1 = require("react-native-fast-image");
var react_redux_1 = require("react-redux");
var color_1 = require("@/themes/colors/color");
var checkOutCard_1 = require("@/redux/checkOutCard");
var native_1 = require("@react-navigation/native");
var DetailSlice_1 = require("@/redux/DetailSlice");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var FavorScreen = function () {
    var checkoutCart = react_redux_1.useSelector(function (state) { return state.checkOutCart; });
    var _a = react_1.useState([]), test = _a[0], setTest = _a[1];
    var navigation = native_1.useNavigation();
    var _b = react_1.useState(''), hello = _b[0], setHello = _b[1];
    var product = react_redux_1.useSelector(function (state) { return state.product; });
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        var data2 = product.productByIds;
        console.log(data2, 'dataScreen');
        var result = checkoutCart === null || checkoutCart === void 0 ? void 0 : checkoutCart.cartGitHubIds.map(function (item, index) {
            if (data2[item]) {
                return data2[item];
            }
        });
        setTest(result);
        console.log(result, 'result');
    }, [checkoutCart]);
    console.log(test, 'test');
    var renderDetailItems = function (_a) {
        var item = _a.item, index = _a.index;
        console.log(item, 'aaaaaaaaaaaaaa');
        return (react_1["default"].createElement(react_native_1.View, { style: styles.Container },
            react_1["default"].createElement(react_native_1.View, { style: styles.Gradient },
                react_1["default"].createElement(react_native_1.Button, { color: "red", title: "Delete", onPress: function () {
                        console.log(item.id, 'caiccgiday');
                        // đây là lúc gọi
                        dispatch(checkOutCard_1.removeProductToCart(item.id.toString()));
                    } }),
                react_1["default"].createElement(react_native_1.View, { style: styles.Content },
                    react_1["default"].createElement(react_native_1.View, { style: styles.Header },
                        react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.Name }, item === null || item === void 0 ? void 0 : item.login),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                                    navigation.navigate('DetailScreen');
                                    dispatch(DetailSlice_1.addDetailSlice(item === null || item === void 0 ? void 0 : item.id.toString()));
                                } },
                                react_1["default"].createElement(react_native_1.Text, null, "Detail Screen"))))),
                react_1["default"].createElement(react_native_1.View, { style: { paddingTop: 20 } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                            return react_native_1.Linking.openURL('https://github.com' + '/' + item.login);
                        } },
                        react_1["default"].createElement(react_native_1.Animated.Image, { style: styles.defaultImage, source: { uri: item === null || item === void 0 ? void 0 : item.avatar_url }, resizeMode: react_native_fast_image_1["default"].resizeMode.contain }))))));
    };
    return (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, null,
        react_1["default"].createElement(react_native_1.ScrollView, { style: {
                width: 'auto',
                paddingTop: 20,
                paddingLeft: 25,
                paddingRight: 25
            } },
            react_1["default"].createElement(react_native_1.FlatList, { data: test, renderItem: renderDetailItems, keyExtractor: function (items) { return items === null || items === void 0 ? void 0 : items.id.toString(); } }))));
};
exports["default"] = FavorScreen;
var styles = react_native_1.StyleSheet.create({
    Container: {
        shadowOpacity: 0.6,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 10
        },
        backgroundColor: color_1["default"].colors.purple,
        marginBottom: 150,
        marginTop: 35,
        borderRadius: 30,
        alignItems: 'center'
    },
    Gradient: {
        width: 260,
        height: 350,
        padding: 30,
        justifyContent: 'space-between'
    },
    Content: {
        width: '100%'
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Name: {
        color: color_1["default"].colors.background,
        fontSize: 24
    },
    SubName: {
        marginTop: 7
    },
    SubNamee: {
        color: color_1["default"].colors.pink
    },
    Image: {
        height: 100,
        width: 100
    },
    defaultImage: {
        width: 200,
        height: 200,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderRadius: 30
    },
    url: {
        width: '100%',
        marginTop: 10,
        textAlign: 'center',
        color: '#FF00FF'
    },
    Heart: {
        position: 'absolute',
        bottom: -4,
        right: -3,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heartCircle: __assign({ justifyContent: 'center', alignItems: 'center', width: 24, height: 24, borderRadius: 12, backgroundColor: 'white' }, react_native_1.Platform.select({
        android: { elevation: 3 },
        ios: {
            shadowColor: 'grey',
            shadowOpacity: 1,
            shadowRadius: 1,
            shadowOffset: {
                width: 0.5,
                height: 0.5
            }
        }
    })),
    heartImage: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 18,
        height: 18
    }
});
