"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInteractionStyle = getInteractionStyle;
exports.getInteractionChildren = getInteractionChildren;
exports.useRadiusStyles = useRadiusStyles;
exports.pickRadiusStyles = pickRadiusStyles;

var _reactNative = require("react-native");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getInteractionStyle(interactionState, s) {
  return typeof s === 'function' ? s(interactionState) : s;
}

function getInteractionChildren(interactionState, c) {
  return typeof c === 'function' ? c(interactionState) : c;
}

function useRadiusStyles(style) {
  return React.useMemo(() => {
    const flattenStyles = _reactNative.StyleSheet.flatten(getInteractionStyle({
      pressed: false
    }, style));

    return pickRadiusStyles(flattenStyles);
  }, [style]);
}

function pickRadiusStyles({
  borderBottomEndRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStartRadius,
  borderRadius,
  borderTopEndRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStartRadius
} = {}) {
  return {
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderRadius,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius
  };
}
//# sourceMappingURL=utils.js.map