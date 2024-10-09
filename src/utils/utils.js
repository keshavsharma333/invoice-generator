export function toCommas(value) {
  //   return Number(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  //     .toFixed(4)
  //     .toString();
  return Number(value)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
