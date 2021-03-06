function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBox from './Checkbox';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { withTheme } from '../../core/theming';

/**
 * Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Checkbox.Item label="Item" status="checked" />
 *   </View>
 * );
 *
 * export default MyComponent;
 *```
 */
const CheckboxItem = (_ref) => {
  let {
    style,
    status,
    label,
    onPress,
    labelStyle,
    theme,
    testID
  } = _ref,
      props = _objectWithoutProperties(_ref, ["style", "status", "label", "onPress", "labelStyle", "theme", "testID"]);

  return /*#__PURE__*/React.createElement(TouchableRipple, {
    onPress: onPress,
    testID: testID
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style],
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, {
      color: theme.colors.primary
    }, labelStyle]
  }, label), /*#__PURE__*/React.createElement(CheckBox, _extends({
    status: status,
    theme: theme
  }, props))));
};

CheckboxItem.displayName = 'Checkbox.Item';
export default withTheme(CheckboxItem); // @component-docs ignore-next-line

export { CheckboxItem };
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16
  }
});
//# sourceMappingURL=CheckboxItem.js.map