describe('should test calculateMonthlyPayment', () => {
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toBe('130.44');
});

it('should return a result with 2 decimal places', () => {
  const values = {
    amount: 10041,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toBe('130.98')
});

it('should caculate high interest rates', () => {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  }
  expect(calculateMonthlyPayment(values)).toBe('82.50')
});

it('should caculate low interest rates', () => {
  const values = {
    amount: 1000,
    years: 40,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toBe('4.82')
});
});

