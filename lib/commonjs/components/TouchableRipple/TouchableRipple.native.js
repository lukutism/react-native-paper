"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _theming = require("../../core/theming");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const TouchableRipple = (_ref) => {
  let {
    style: _style,
    background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor,
    children,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["style", "background", "borderless", "disabled", "rippleColor", "underlayColor", "children", "theme"]);

  const {
    dark,
    colors
  } = theme;
  const disabled = disabledProp || !rest.onPress;
  const calculatedRippleColor = rippleColor || (0, _color.default)(colors.text).alpha(dark ? 0.32 : 0.2).rgb().string();
  const rippleContainerStyle = (0, _utils.useRadiusStyles)(_style);
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
    disabled: disabled,
    android_ripple: {
      color: background != null ? background : calculatedRippleColor,
      borderless
    },
    style: interactionState => [styles.touchable, borderless && styles.borderless, (0, _utils.getInteractionStyle)(interactionState, _style)]
  }), interactionState => /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.only((0, _utils.getInteractionChildren)(interactionState, children)), interactionState.pressed && _reactNative.Platform.OS !== 'android' ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, rippleContainerStyle, {
      backgroundColor: underlayColor || calculatedRippleColor
    }]
  }) : null));
};

const styles = _reactNative.StyleSheet.create({
  touchable: {
    position: 'relative'
  },
  borderless: {
    overflow: 'hidden'
  }
});

var _default = (0, _theming.withTheme)(TouchableRipple);

exports.default = _default;
//# sourceMappingURL=TouchableRipple.native.js.map