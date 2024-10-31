import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App.js';

const mockedJson = [
  { id: 847202, login: 'Juan' },
  { id: 298347, login: 'María' },
  { id: 927384, login: 'Carlos' },
  { id: 483920, login: 'Ana' },
  { id: 230948, login: 'Luis' },
  { id: 987234, login: 'Elena' },
  { id: 109283, login: 'Miguel' },
  { id: 564738, login: 'Lucía' },
  { id: 784930, login: 'Pedro' },
  { id: 837291, login: 'Carmen' },
  { id: 394820, login: 'Jorge' },
  { id: 562837, login: 'Marta' },
  { id: 918374, login: 'Rafael' },
  { id: 728394, login: 'Sofía' },
  { id: 239847, login: 'Antonio' },
  { id: 734829, login: 'Isabel' },
  { id: 982347, login: 'Diego' },
  { id: 872340, login: 'Paula' },
  { id: 182734, login: 'Manuel' },
  { id: 983470, login: 'Laura' },
];

const clickButton = (times, button) => {
  const buttonClick = screen.getByRole('button', { name: button });
  for (let i = 0; i < times; i++) {
    fireEvent.click(buttonClick);
  }
};

describe('Users App', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  beforeEach(() => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockedJson,
    });
    render(<App />);
  });

  afterEach(() => {
    fetch.mockClear();
  });

  it('Shows Users Title', () => {
    const headingElement = screen.getByRole('heading', { name: /Users/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('Shows five users on initial render', async () => {
    await waitFor(() => {
      const listItems = screen.getAllByRole('listitem').length;
      expect(listItems).toBe(10);
    });
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

  it('Hides More button when total users are shown', () => {
    const moreButton = screen.getByRole('button', { name: /More/i });
    clickButton(2, 'More');
    expect(moreButton).not.toBeInTheDocument();
  });

  it('Hides Less button when there are no users to show', () => {
    const lessButton = screen.getByRole('button', { name: /Less/i });
    clickButton(2, 'Less');
    expect(lessButton).not.toBeInTheDocument();
  });
});
