export default {
  xs: "414px",
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  ll: "1320px",
  hg: "1440px",
  hh: "1560px",
  up: function(size) {
    return `@media screen and (min-width: ${this[size]})`;
  },
  down: function(size) {
    return `@media screen and (max-width: ${this[size]})`;
  },
  between: function(low, high) {
    return `@media screen and (max-width: ${this[high]}) and (min-width: ${this[low]})`;
  }
}
