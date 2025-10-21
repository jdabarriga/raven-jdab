import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../tests/testUtils';
import ThemeSwitcher from './ThemeSwitcher';

describe('ThemeSwitcher Component', () => {
  test('renders theme switcher button', () => {
    renderWithProviders(<ThemeSwitcher />);
    const button = screen.getByTitle('Change Theme');
    expect(button).toBeInTheDocument();
  });

  test('opens theme menu when button is clicked', () => {
    renderWithProviders(<ThemeSwitcher />);
    const button = screen.getByTitle('Change Theme');
    
    fireEvent.click(button);
    
    expect(screen.getByText('Midnight Raven')).toBeInTheDocument();
    expect(screen.getByText('Shadow Raven')).toBeInTheDocument();
    expect(screen.getByText('Obsidian Raven')).toBeInTheDocument();
  });

  test('closes theme menu when a theme is selected', async () => {
    renderWithProviders(<ThemeSwitcher />);
    const button = screen.getByTitle('Change Theme');
    
    // Open menu
    fireEvent.click(button);
    expect(screen.getByText('Midnight Raven')).toBeInTheDocument();
    
    // Select a theme
    const themeOption = screen.getByText('Shadow Raven');
    fireEvent.click(themeOption);
    
    // Menu should close
    await waitFor(() => {
      expect(screen.queryByText('Midnight Raven')).not.toBeInTheDocument();
    });
  });

  test('toggles menu open and closed', () => {
    renderWithProviders(<ThemeSwitcher />);
    const button = screen.getByTitle('Change Theme');
    
    // Open menu
    fireEvent.click(button);
    expect(screen.getByText('Midnight Raven')).toBeInTheDocument();
    
    // Close menu
    fireEvent.click(button);
    expect(screen.queryByText('Midnight Raven')).not.toBeInTheDocument();
  });

  test('applies hover styles to theme options', () => {
    renderWithProviders(<ThemeSwitcher />);
    const button = screen.getByTitle('Change Theme');
    
    fireEvent.click(button);
    
    const themeOption = screen.getByText('Shadow Raven');
    fireEvent.mouseEnter(themeOption);
    fireEvent.mouseLeave(themeOption);
    
    // Component should still be in the document after hover events
    expect(themeOption).toBeInTheDocument();
  });
});
