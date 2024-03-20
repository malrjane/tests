import calculateTotal from '../purchases';
test('should calculate total for purchases', () => {
  const input = [
    {
      id: 1, name: 'capy', price: 33, count: 3,
    },
    {
      id: 2, name: 'vombi', price: 55, count: 2,
    },
  ];
  const expected = 196.25;
  const received = calculateTotal(input, true);
  expect(received).toBeCloseTo(expected);
});