function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet, Pressable, View, Platform } from 'react-native';
import color from 'color';
import { withTheme } from '../../core/theming';
import { getInteractionChildren, getInteractionStyle, useRadiusStyles } from './utils';

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
  const calculatedRippleColor = rippleColor || color(colors.text).alpha(dark ? 0.32 : 0.2).rgb().string();
  const rippleContainerStyle = useRadiusStyles(_style);
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, rest, {
    disabled: disabled,
    android_ripple: {
      color: background != null ? background : calculatedRippleColor,
      borderless
    },
    style: interactionState => [styles.touchable, borderless && styles.borderless, getInteractionStyle(interactionState, _style)]
  }), interactionState => /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.only(getInteractionChildren(interactionState, children)), interactionState.pressed && Platform.OS !== 'android' ? /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, rippleContainerStyle, {
      backgroundColor: underlayColor || calculatedRippleColor
    }]
  }) : null));
};

const styles = StyleSheet.create({
  touchable: {
    position: 'relative'
  },
  borderless: {
    overflow: 'hidden'
  }
});
export default withTheme(TouchableRipple);
//# sourceMappingURL=TouchableRipple.native.js.map