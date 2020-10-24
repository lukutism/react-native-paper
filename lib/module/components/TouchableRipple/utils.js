import { StyleSheet } from 'react-native';
import * as React from 'react';
export function getInteractionStyle(interactionState, s) {
  return typeof s === 'function' ? s(interactionState) : s;
}
export function getInteractionChildren(interactionState, c) {
  return typeof c === 'function' ? c(interactionState) : c;
}
export function useRadiusStyles(style) {
  return React.useMemo(() => {
    const flattenStyles = StyleSheet.flatten(getInteractionStyle({
      pressed: false
    }, style));
    return pickRadiusStyles(flattenStyles);
  }, [style]);
}
export function pickRadiusStyles({
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