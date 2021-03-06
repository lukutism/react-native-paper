function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import color from 'color';
import ActivityIndicator from './ActivityIndicator';
import Icon from './Icon';
import Surface from './Surface';
import Text from './Typography/Text';
import TouchableRipple from './TouchableRipple/TouchableRipple';
import { black, white } from '../styles/colors';
import { withTheme } from '../core/theming';

/**
 * A button is component that the user can press to trigger an action.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/button-1.png" />
 *     <figcaption>Text button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-2.png" />
 *     <figcaption>Outlined button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-3.png" />
 *     <figcaption>Contained button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
 *     Press me
 *   </Button>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Button = (_ref) => {
  let {
    disabled,
    compact,
    mode = 'text',
    dark,
    loading,
    icon,
    color: buttonColor,
    children,
    uppercase = true,
    accessibilityLabel,
    onPress,
    style,
    theme,
    contentStyle,
    labelStyle,
    testID
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["disabled", "compact", "mode", "dark", "loading", "icon", "color", "children", "uppercase", "accessibilityLabel", "onPress", "style", "theme", "contentStyle", "labelStyle", "testID"]);

  const {
    current: elevation
  } = React.useRef(new Animated.Value(mode === 'contained' ? 2 : 0));

  const handlePressIn = () => {
    if (mode === 'contained') {
      const {
        scale
      } = theme.animation;
      Animated.timing(elevation, {
        toValue: 8,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    }
  };

  const handlePressOut = () => {
    if (mode === 'contained') {
      const {
        scale
      } = theme.animation;
      Animated.timing(elevation, {
        toValue: 2,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    }
  };

  const {
    colors,
    roundness
  } = theme;
  const font = theme.fonts.medium;
  let backgroundColor, borderColor, textColor, borderWidth;

  if (mode === 'contained') {
    if (disabled) {
      backgroundColor = color(theme.dark ? white : black).alpha(0.12).rgb().string();
    } else if (buttonColor) {
      backgroundColor = buttonColor;
    } else {
      backgroundColor = colors.primary;
    }
  } else {
    backgroundColor = 'transparent';
  }

  if (mode === 'outlined') {
    borderColor = color(theme.dark ? white : black).alpha(0.29).rgb().string();
    borderWidth = StyleSheet.hairlineWidth;
  } else {
    borderColor = 'transparent';
    borderWidth = 0;
  }

  if (disabled) {
    textColor = color(theme.dark ? white : black).alpha(0.32).rgb().string();
  } else if (mode === 'contained') {
    let isDark;

    if (typeof dark === 'boolean') {
      isDark = dark;
    } else {
      isDark = backgroundColor === 'transparent' ? false : !color(backgroundColor).isLight();
    }

    textColor = isDark ? white : black;
  } else if (buttonColor) {
    textColor = buttonColor;
  } else {
    textColor = colors.primary;
  }

  const rippleColor = color(textColor).alpha(0.32).rgb().string();
  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius: roundness
  };
  const touchableStyle = {
    borderRadius: style ? StyleSheet.flatten(style).borderRadius || roundness : roundness
  };
  const {
    color: customLabelColor,
    fontSize: customLabelSize
  } = StyleSheet.flatten(labelStyle) || {};

  const textStyle = _objectSpread({
    color: textColor
  }, font);

  const elevationRes = disabled || mode !== 'contained' ? 0 : elevation;
  return /*#__PURE__*/React.createElement(Surface, _extends({}, rest, {
    style: [styles.button, compact && styles.compact, {
      elevation: elevationRes
    }, buttonStyle, style]
  }), /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    accessibilityLabel: accessibilityLabel,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    disabled: disabled,
    rippleColor: rippleColor,
    style: touchableStyle,
    testID: testID
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, contentStyle]
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(View, {
    style: styles.icon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: customLabelSize || 16,
    color: customLabelColor || textColor
  })) : null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: customLabelSize || 16,
    color: customLabelColor || textColor,
    style: styles.icon
  }) : null, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [styles.label, compact && styles.compactLabel, uppercase && styles.uppercaseLabel, textStyle, font, labelStyle]
  }, children))));
};

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: 'solid'
  },
  compact: {
    minWidth: 'auto'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginLeft: 12,
    marginRight: -4
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 9,
    marginHorizontal: 16
  },
  compactLabel: {
    marginHorizontal: 8
  },
  uppercaseLabel: {
    textTransform: 'uppercase'
  }
});
export default withTheme(Button);
//# sourceMappingURL=Button.js.map