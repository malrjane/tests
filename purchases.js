export default function calculatetTotal(purchases, applyDiscount = false) {
  let result = purchases.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  )
  if(applyDiscount) {
    return result * 0.939;
  }
}