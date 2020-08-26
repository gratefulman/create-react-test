import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);


//   expect(linkElement).toBeInTheDocument();
// });


test('test math', ()=>{

  const sum = Math.abs(-1);
  expect(sum).toEqual(1);

});