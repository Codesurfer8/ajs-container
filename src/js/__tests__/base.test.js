import ErrorRepository from '../base';

test('search of mistakes', () => {
  const error = new ErrorRepository();

  expect(error.translate(100)).toBe('No data uploaded');
});

test('search of mistakes', () => {
  const error = new ErrorRepository();

  expect(() => { error.translate(500); }).toThrow('Unknown error');
});
