import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

describe('Users App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Shows Users Title', () => {
    const headingElement = screen.getByRole('heading', { name: /Users/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('Shows five users on initial render', () => {
    const listItems = screen.getAllByRole('listitem').length;
    expect(listItems).toBe(10);
  });
});
