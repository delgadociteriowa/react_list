import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js';

const clickButton = (times, button) => {
  const buttonClick = screen.getByRole('button', { name: button });
  for (let i = 0; i < times; i++) {
    fireEvent.click(buttonClick);
  }
};

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

  it('Shows More button', () => {
    const moreButton = screen.getByRole('button', { name: /More/i });
    expect(moreButton).toBeInTheDocument();
  });

  it('Shows Less button', () => {
    const lessButton = screen.getByRole('button', { name: /Less/i });
    expect(lessButton).toBeInTheDocument();
  });

  it('Shows five more users when More button is clicked', () => {
    clickButton(1, 'More');
    const baseUsersCount = screen.getAllByRole('listitem').length;
    expect(baseUsersCount).toBe(15);
  });

  it('Shows five less users when Less button is clicked', () => {
    clickButton(1, 'Less');
    const baseUsersCount = screen.getAllByRole('listitem').length;
    expect(baseUsersCount).toBe(5);
  });
});
