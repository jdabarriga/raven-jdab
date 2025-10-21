import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './tests/testUtils';
import App from './App';

// Mock the pages
jest.mock('./pages/Welcome', () => {
  return function Welcome() {
    return <div data-testid="welcome-page">Welcome Page</div>;
  };
});

jest.mock('./pages/Home', () => {
  return function Home() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

describe('App Component', () => {
  test('renders without crashing', () => {
    renderWithProviders(<App />);
    expect(screen.getByTestId('welcome-page')).toBeInTheDocument();
  });

  test('renders ThemeProvider wrapper', () => {
    const { container } = renderWithProviders(<App />);
    expect(container).toBeInTheDocument();
  });

  test('has correct container classes', () => {
    const { container } = renderWithProviders(<App />);
    const appDiv = container.querySelector('.flex.justify-center.items-center');
    expect(appDiv).toBeInTheDocument();
  });
});
