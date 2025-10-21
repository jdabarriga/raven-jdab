import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../tests/testUtils';
import Welcome from './Welcome';

describe('Welcome Page', () => {
  test('renders welcome page with title', () => {
    renderWithProviders(<Welcome />);
    
    expect(screen.getByText('WELCOME TO')).toBeInTheDocument();
    expect(screen.getByText('RAVEN')).toBeInTheDocument();
  });

  test('renders subtitle with copyright', () => {
    renderWithProviders(<Welcome />);
    
    expect(screen.getByText('2024 UNCO Properties Raven Inc.')).toBeInTheDocument();
  });

  test('renders Raven logo', () => {
    renderWithProviders(<Welcome />);
    
    const logo = screen.getByAltText('Raven Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');
  });

  test('renders Continue button with link to Home', () => {
    renderWithProviders(<Welcome />);
    
    const continueButton = screen.getByText('Continue');
    expect(continueButton).toBeInTheDocument();
    
    const link = continueButton.closest('a');
    expect(link).toHaveAttribute('href', '/Home');
  });

  test('renders ThemeSwitcher component', () => {
    renderWithProviders(<Welcome />);
    
    const themeSwitcher = screen.getByTitle('Change Theme');
    expect(themeSwitcher).toBeInTheDocument();
  });

  test('has correct CSS classes applied', () => {
    renderWithProviders(<Welcome />);
    
    const container = screen.getByText('WELCOME TO').closest('.welcome-container');
    expect(container).toBeInTheDocument();
  });
});
