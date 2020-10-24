function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import color from 'color';
import { withTheme } from '../../core/theming';
import Ripple, { RippleStatus } from './Ripple';
import { getInteractionChildren, getInteractionStyle, useRadiusStyles } from './utils';

/**
 * A wrapper for views that should respond to touches.
 * Provides a material "ink ripple" interaction effect for supported platforms (>= Android Lollipop).
 * On unsupported platforms, it falls back to a highlight effect.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/touchable-ripple.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Text, TouchableRipple } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <TouchableRipple
 *     onPress={() => console.log('Pressed')}
 *     rippleColor="rgba(0, 0, 0, .32)"
 *   >
 *     <Text>Press anywhere</Text>
 *   </TouchableRipple>
 * );
 *
 * export default MyComponent;
 * ```
 */
function TouchableRipple(_ref) {
  let {
    style: _style,
    background: _background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor: _underlayColor,
    children,
    centered,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["style", "background", "borderless", "disabled", "rippleColor", "underlayColor", "children", "centered", "theme"]);

  const calculatedRippleColor = rippleColor || color(theme.colors.text).alpha(theme.dark ? 0.32 : 0.2).rgb().string();
  const [rippleArray, setRippleArray] = React.useState([]);

  const handlePressIn = e => {
    var _rest$onPressIn, _touches$;

    (_rest$onPressIn = rest.onPressIn) === null || _rest$onPressIn === void 0 ? void 0 : _rest$onPressIn.call(rest, e);
    const button = e.currentTarget;
    const dimensions = button.getBoundingClientRect();
    let touchX;
    let touchY;
    const {
      changedTouches,
      touches
    } = e.nativeEvent;
    const touch = (_touches$ = touches === null || touches === void 0 ? void 0 : touches[0]) !== null && _touches$ !== void 0 ? _touches$ : changedTouches === null || changedTouches === void 0 ? void 0 : changedTouches[0]; // If centered or it was pressed using keyboard - enter or space

    if (centered || !touch) {
      touchX = dimensions.width / 2;
      touchY = dimensions.height / 2;
    } else {
      var _touch$locationX, _touch$locationY;

      touchX = (_touch$locationX = touch.locationX) !== null && _touch$locationX !== void 0 ? _touch$locationX : e.pageX;
      touchY = (_touch$locationY = touch.locationY) !== null && _touch$locationY !== void 0 ? _touch$locationY : e.pageY;
    }

    const size = centered ? // If ripple is always centered, we don't need to make it too big
    Math.min(dimensions.width, dimensions.height) * 1.25 : // Otherwise make it twice as big so clicking on one end spreads ripple to other
    Math.max(dimensions.width, dimensions.height) * 2;
    const newRipple = {
      style: {
        backgroundColor: calculatedRippleColor,
        left: touchX,
        top: touchY,
        width: size,
        height: size
      },
      animationDuration: Math.min(size * 1.5, 350),
      status: RippleStatus.Pressed
    };
    setRippleArray([...rippleArray, newRipple]);
  };

  const onRemove = ripple => {
    setRippleArray(prev => prev.filter(p => p !== ripple));
  };

  const handlePressOut = e => {
    var _rest$onPressOut;

    (_rest$onPressOut = rest.onPressOut) === null || _rest$onPressOut === void 0 ? void 0 : _rest$onPressOut.call(rest, e);
    setRippleArray(prev => prev.map((p, i) => i === prev.length - 1 ? _objectSpread(_objectSpread({}, p), {}, {
      status: RippleStatus.NotPressed
    }) : p));
  };

  const disabled = disabledProp || !rest.onPress;
  const rippleContainerStyle = useRadiusStyles(_style);
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, rest, {
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    disabled: disabled,
    style: interactionState => [styles.touchable, borderless && styles.overflowHidden, getInteractionStyle(interactionState, _style)]
  }), interactionState => /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.only(getInteractionChildren(interactionState, children)), /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, rippleContainerStyle, centered ? styles.overflowVisible : styles.overflowHidden],
    pointerEvents: "none"
  }, rippleArray.map((ripple, index) => /*#__PURE__*/React.createElement(Ripple, {
    key: index,
    ripple: ripple,
    onRemove: onRemove
  })))));
}

const styles = StyleSheet.create({
  touchable: {
    position: 'relative'
  },
  overflowVisible: {
    overflow: 'visible'
  },
  overflowHidden: {
    overflow: 'hidden'
  }
});
/**
 * Whether ripple effect is supported.
 */

TouchableRipple.supported = true;
export default withTheme(TouchableRipple);
//# sourceMappingURL=TouchableRipple.js.map