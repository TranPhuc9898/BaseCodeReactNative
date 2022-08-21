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
// import lib
var react_native_fast_image_1 = require("react-native-fast-image");
// import folder
var color_1 = require("@/themes/colors/color");
var react_redux_1 = require("react-redux");
var checkOutCard_1 = require("@/redux/checkOutCard");
var UserCard = function (_a) {
    var login = _a.login, id = _a.id, url = _a.url, avatar_url = _a.avatar_url;
    var _b = react_1.useState(false), stateHeart = _b[0], setStateHeart = _b[1];
    //Redux
    var dispatch = react_redux_1.useDispatch();
    var checkoutCart = react_redux_1.useSelector(function (state) { return state.checkOutCart; });
    var lastTap = react_1.useRef(0);
    var isAnimating = react_1.useRef(false);
    var animatedValue = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    // const pressHeart = () => {
    //   setStateHeart(!stateHeart)
    // }
    react_1.useEffect(function () {
        if (stateHeart) {
            react_native_1.Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }).start(function () { return (isAnimating.current = false); });
        }
        else {
            animatedValue.setValue(0);
            isAnimating.current = false;
        }
    }, [animatedValue, stateHeart]);
    var heartAnimation = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 0.1, 0.8, 1],
                    outputRange: [0, 2, 2, 1]
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 0.1, 0.8, 1],
                    outputRange: [0, -40, -40, 1]
                })
            }
        ]
    };
    var heartCircleAnimation = {
        opacity: animatedValue
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.Container },
        react_1["default"].createElement(react_native_1.View, { style: styles.Gradient },
            react_1["default"].createElement(react_native_1.View, { style: styles.Content },
                react_1["default"].createElement(react_native_1.View, { style: styles.Header },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.Name }, login))),
            react_1["default"].createElement(react_native_1.View, { style: { paddingTop: 50 } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return react_native_1.Linking.openURL('https://github.com' + '/' + login); } },
                    react_1["default"].createElement(react_native_fast_image_1["default"], { style: styles.defaultImage, source: { uri: avatar_url }, resizeMode: react_native_fast_image_1["default"].resizeMode.contain }))),
            react_1["default"].createElement(react_native_1.View, { style: styles.Heart },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.heartCircle, activeOpacity: 1, onPress: function () {
                        if (stateHeart) {
                            dispatch(checkOutCard_1.removeProductToCart(id.toString()));
                        }
                        else {
                            dispatch(checkOutCard_1.addProductToCart(id.toString()));
                        }
                        setStateHeart(!stateHeart);
                    } }, stateHeart && (react_1["default"].createElement(react_native_1.Animated.Image, { style: [styles.heartImage, heartAnimation], source: require('../../assets/images/heart.png'), resizeMode: react_native_fast_image_1["default"].resizeMode.contain })))))));
};
exports["default"] = react_1.memo(UserCard);
var styles = react_native_1.StyleSheet.create({
    Container: {
        shadowOpacity: 0.6,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 10
        },
        backgroundColor: color_1["default"].colors.purple,
        marginLeft: 20,
        marginBottom: 22,
        borderRadius: 30
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
