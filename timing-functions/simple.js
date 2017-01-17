/*
 * Easing Functions - from https://gist.github.com/gre/1650294
 */
export const EasingFunctions = {
  linear: (t) => { return t },
  easeInQuad: (t) => { return t*t },
  easeOutQuad: (t) => { return t*(2-t) },
  easeInOutQuad: (t) => { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  easeInCubic: (t) => { return t*t*t },
  easeOutCubic: (t) => { return (--t)*t*t+1 },
  easeInOutCubic: (t) => { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  easeInQuart: (t) => { return t*t*t*t },
  easeOutQuart: (t) => { return 1-(--t)*t*t*t },
  easeInOutQuart: (t) => { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  easeInQuint: (t) => { return t*t*t*t*t },
  easeOutQuint: (t) => { return 1+(--t)*t*t*t*t },
  easeInOutQuint: (t) => { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t },
  bounce: (t) => {
        if (t < (1 / 2.75)) {
                return 7.5625 * t * t;
            } else if (t < (2 / 2.75)) {
                return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
            } else if (t < (2.5 / 2.75)) {
                return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
            } else {
                return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
            }
        }
}