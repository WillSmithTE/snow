import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { dateTransformer } from './dateTransformer';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('date transforms', () => {
  const transformed = dateTransformer('2020-05-20');
  expect(transformed).toEqual(140);
});