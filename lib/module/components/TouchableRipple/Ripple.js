function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { StyleSheet, View, unstable_createElement } from 'react-native';
import * as React from 'react';

const Div = props => unstable_createElement('div', props);

const RIPPLE_DURATION = 250;
export const RippleStatus = {
  Pressed: 'pressed',
  NotPressed: 'not_pressed'
};
export default function Ripple({
  onRemove,
  ripple,
  ripple: {
    status,
    animationDuration,
    style
  }
}) {
  const onAnimationEnd = () => {
    if (status === RippleStatus.NotPressed) {
      onRemove(ripple);
    }
  };

  return /*#__PURE__*/React.createElement(View, {
    style: [rippleStyles.container, status === RippleStatus.Pressed ? rippleStyles.show : rippleStyles.hide]
  }, /*#__PURE__*/React.createElement(Div, {
    onAnimationEnd: onAnimationEnd,
    style: [rippleStyles.ripple, style, {
      // @ts-ignore
      animationDuration: "".concat(animationDuration, "ms")
    }]
  }));
}
const fromRippleStyle = {
  transform: [{
    translateY: '-50%'
  }, {
    translateX: '-50%'
  }, {
    scale: '0.1'
  }]
};
const toRippleStyle = {
  transform: [{
    translateY: '-50%'
  }, {
    translateX: '-50%'
  }, {
    scale: '1'
  }]
};
const rippleStyles = StyleSheet.create({
  ripple: _objectSpread(_objectSpread({
    position: 'absolute',
    willChange: 'transform',
    borderRadius: '50%',
    transformOrigin: 'center',
    animationDuration: "".concat(RIPPLE_DURATION, "ms"),
    animationTimingFunction: 'linear'
  }, toRippleStyle), {}, {
    //@ts-ignore
    animationKeyframes: {
      '0%': fromRippleStyle,
      '100%': toRippleStyle
    }
  }),
  container: {
    //@ts-ignore
    transitionDuration: "250ms",
    willChange: 'opacity',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'linear'
  },
  show: {
    opacity: 0.5
  },
  hide: {
    opacity: 0
  }
});
//# sourceMappingURL=Ripple.js.map