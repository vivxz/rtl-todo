import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App.js';

afterEach(cleanup);

describe('Testing to see if renders', () => {
  it ('Input renders', () => {
    const {getByPlaceholderText} = render(<App />);
    const input = getByPlaceholderText('Add New Todo')
    expect(input).toBeTruthy()
  })
})

describe('Adding a new todo', () => {
  it ('Checks if input has typed texts', () => {
    const {getByPlaceholderText} = render(<App />)
    const test = '0419';

    // reference to which component
    const input = getByPlaceholderText('Add New Todo');

    // types in a new input
    fireEvent.change(input, {target: {value: test}})

    expect(input.value).toBe('0419')
  }),

  it ('Checks if input resets', () => {
    const {getByRole, getByPlaceholderText} = render(<App />)
    const test = '0419';

    // reference to which component
    const input = getByPlaceholderText('Add New Todo');
    const submit = getByRole('button', {name: 'Submit'});

    fireEvent.change(input, {target: {value: test}})
    // clicks on submit
    fireEvent.click(submit);

    expect(input.value).toBe('')
  }),

  it ('Button clicked', () => {
    const {getByRole} = render(<App />);
    const submit = getByRole('button', {name: 'Submit'});

    fireEvent.click(submit);

    expect(submit).not.toBeDisabled();
  }) 
})

